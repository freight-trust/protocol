#!/usr/bin/env node
import fs from 'fs'
import jose from 'node-jose'
import pem from 'pem'

async function run () {
  try {
    // keystore to stick our node-jose keys before we do signing 
    let keystore = jose.JWK.createKeyStore()

    // load in the private key
    let privatepem = fs.readFileSync('./device.key', 'utf8')
    let privatekey = await keystore.add(privatepem, 'pem')

    // and the public key
    let publicpem = fs.readFileSync('./device.crt', 'utf8')
    let publickey = await keystore.add(publicpem, 'pem')

    // we need the public key chain in x5c header. x5c header chain will be used during
    // decode, a full cert can be provided to ensure validation all the way to root
    // https://tools.ietf.org/html/draft-ietf-jose-json-web-key-41#page-9
    // unfortunately we can't just use plain jwk, since jwk is only the *key* and not the
    // full *certificate*, so ... x5c it is
    let x5cChain = cert_to_x5c(publicpem)

    // the message body
    let message = JSON.stringify({
      iss: 'vendor',
      sub: '1234',
      exp: Date.now()+10*60*1000, // expires in 10 minutes
      iat: Date.now(),
      bundle: '...'
    })

    // and signing options
    let signoptions = { fields: { x5c: x5cChain } }

    // sign 'message' with the 'privatekey', include the 'x5c' chain in the headers
    let signed = await jose.JWS.createSign(signoptions, privatekey).update(message, 'utf8').final()

    // bet you didn't think it would be that big
    console.log(signed)

    console.log('//////////////////////////////')

    // a quick sanity check - the cisco/node-jose lib provides x5c verification fortunately
    let result = await jose.JWS.createVerify().verify(signed)
    console.log(JSON.parse(result.payload))

    console.log('//////////////////////////////')

    // but .. it doesn't check expiry date on the message
    let exp = new Date(JSON.parse(result.payload).exp)
    console.log(exp)
    if (Date.now() > exp) {
      console.log('message is too old')
      throw Error(`message expiry [exp] is too old; JWS expires at: ${exp}`)
    } else {
      console.log('message expiry valid')
    }

    // and .. it doesn't do the full x509 cert verification, it just checks that the
    // key from the first cert in the x5c header can verify the payload so now, we
    // need to shell out to openssl to verify that the provided key was signed by the CA
    // why oh why is there nothing native for this
    let cert = await x5c_to_cert(result.header.x5c)

    // load the CA
    let cacert = fs.readFileSync('./cachain.crt', 'utf8')

    // it actually works!
    let trusted = await verifySigningChain(cert, cacert)

    console.log('worked?', trusted)
    console.log(JSON.parse(result.payload))
  } catch (err) {
    console.log(err)
  }
}

run()

// promisify the thing
function verifySigningChain (cert, cacert) {
  return new Promise((resolve, reject) => {
    pem.verifySigningChain(cert, cacert, (err, ver) => {
      if (err) return reject(err)
      return resolve(ver)
    })
  })
}

// taken from (MIT licensed):
// https://github.com/hildjj/node-posh/blob/master/lib/index.js
function cert_to_x5c (cert, maxdepth) {
  if (maxdepth == null) {
    maxdepth = 0;
  }
  /*
   * Convert a PEM-encoded certificate to the version used in the x5c element
   * of a [JSON Web Key](http://tools.ietf.org/html/draft-ietf-jose-json-web-key).
   *             
   * `cert` PEM-encoded certificate chain
   * `maxdepth` The maximum number of certificates to use from the chain.
   */

  cert = cert.replace(/-----[^\n]+\n?/gm, ',').replace(/\n/g, '');
  cert = cert.split(',').filter(function(c) {
    return c.length > 0;
  });
  if (maxdepth > 0) {
    cert = cert.splice(0, maxdepth);
  }
  return cert;
}

function x5c_to_cert (x5c) {
  var cert, y;
  cert = ((function() {
    var _i, _ref, _results;
    _results = [];
    for (y = _i = 0, _ref = x5c.length; _i <= _ref; y = _i += 64) {
      _results.push(x5c.slice(y, +(y + 63) + 1 || 9e9));
    }
    return _results;
  })()).join('\n');
  return ("-----BEGIN CERTIFICATE-----\n" + cert + "\n-----END CERTIFICATE-----");
}