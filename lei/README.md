# LEI Informative 

curl --request GET 'https://leilookup.gleif.org/api/v2/leirecords?lei=254900C9UJMDGJ0ILK56' --header 'Content-Type: application/json' --data-raw '[]'

```json
[{"LEI":{"$":"254900C9UJMDGJ0ILK56"},"Entity":{"LegalName":{"$":"FreightTrust and Clearing, Inc."},"OtherEntityNames":{"OtherEntityName":[{"@type":"TRADING_OR_OPERATING_NAME","$":"Freight Trust and Clearing"}]},"LegalAddress":{"FirstAddressLine":{"$":"c\/o ROCKET LAWYER CORPORATE SERVICES LLC"},"AdditionalAddressLine":[{"$":"2035 SUNSET LAKE RD"},{"$":"SUITE B-2"}],"City":{"$":"NEWARK"},"Region":{"$":"US-DE"},"Country":{"$":"US"},"PostalCode":{"$":"19702"}},"HeadquartersAddress":{"FirstAddressLine":{"$":"1424 4th St Ste 214"},"AdditionalAddressLine":[{"$":"PMB 1513"}],"City":{"$":"Santa Monica"},"Region":{"$":"US-CA"},"Country":{"$":"US"},"PostalCode":{"$":"90401"}},"RegistrationAuthority":{"RegistrationAuthorityID":{"$":"RA000602"},"RegistrationAuthorityEntityID":{"$":"7650005"}},"LegalJurisdiction":{"$":"US-DE"},"LegalForm":{"EntityLegalFormCode":{"$":"XTIQ"}},"EntityStatus":{"$":"ACTIVE"}},"Registration":{"InitialRegistrationDate":{"$":"2020-05-11T11:47:13.761Z"},"LastUpdateDate":{"$":"2020-05-11T11:47:13.761Z"},"RegistrationStatus":{"$":"ISSUED"},"NextRenewalDate":{"$":"2021-05-11T11:47:13.761Z"},"ManagingLOU":{"$":"5493001KJTIIGC8Y1R12"},"ValidationSources":{"$":"FULLY_CORROBORATED"},"ValidationAuthority":{"ValidationAuthorityID":{"$":"RA000602"},"ValidationAuthorityEntityID":{"$":"7650005"}}}}]
```

unminifed...

```json
[
    {
        "LEI": { "$": "254900C9UJMDGJ0ILK56" },
        "Entity": {
            "LegalName": { "$": "FreightTrust and Clearing, Inc." },
            "OtherEntityNames": { "OtherEntityName": [{ "@type": "TRADING_OR_OPERATING_NAME", "$": "Freight Trust and Clearing" }] },
            "LegalAddress": {
                "FirstAddressLine": { "$": "c/o ROCKET LAWYER CORPORATE SERVICES LLC" },
                "AdditionalAddressLine": [{ "$": "2035 SUNSET LAKE RD" }, { "$": "SUITE B-2" }],
                "City": { "$": "NEWARK" },
                "Region": { "$": "US-DE" },
                "Country": { "$": "US" },
                "PostalCode": { "$": "19702" }
            },
            "HeadquartersAddress": {
                "FirstAddressLine": { "$": "1424 4th St Ste 214" },
                "AdditionalAddressLine": [{ "$": "PMB 1513" }],
                "City": { "$": "Santa Monica" },
                "Region": { "$": "US-CA" },
                "Country": { "$": "US" },
                "PostalCode": { "$": "90401" }
            },
            "RegistrationAuthority": { "RegistrationAuthorityID": { "$": "RA000602" }, "RegistrationAuthorityEntityID": { "$": "7650005" } },
            "LegalJurisdiction": { "$": "US-DE" },
            "LegalForm": { "EntityLegalFormCode": { "$": "XTIQ" } },
            "EntityStatus": { "$": "ACTIVE" }
        },
        "Registration": {
            "InitialRegistrationDate": { "$": "2020-05-11T11:47:13.761Z" },
            "LastUpdateDate": { "$": "2020-05-11T11:47:13.761Z" },
            "RegistrationStatus": { "$": "ISSUED" },
            "NextRenewalDate": { "$": "2021-05-11T11:47:13.761Z" },
            "ManagingLOU": { "$": "5493001KJTIIGC8Y1R12" },
            "ValidationSources": { "$": "FULLY_CORROBORATED" },
            "ValidationAuthority": { "ValidationAuthorityID": { "$": "RA000602" }, "ValidationAuthorityEntityID": { "$": "7650005" } }
        }
    }
]

```




### CAA Verification

Fetch Issued CAA Certification Policy

[cert transparency.org](https://www.certificate-transparency.org/)

```bash
freighttrust.com.	IN	CAA	0 issue "digicert.com"
freighttrust.com.	IN	CAA	0 issue "letsencrypt.org"
freighttrust.com.	IN	CAA	0 issue "sectigo.com"
```

parse lei.bloomberg.com

search for... `<div ng-if="leiViewerData" class="ng-scope"><json-viewer data="leiViewerData" class="ng-isolate-scope">`

let HashingOutput = Base64URL( Multihash(DATA, 'sha2-256') );


### terms

`credentials`: [source](https://www.w3.org/TR/vc-data-model/#dfn-verifiable-credentials)

`derived predicate`
A verifiable, boolean assertion about the value of another attribute in a verifiable credential. 


## Minimal DID
[source](https://w3c.github.io/did-core/#a-simple-example_)


```json
{
  "@context": "https://www.w3.org/ns/did/v1",
  "id": "did:example:123456789abcdefghi",
  "authentication": [{
    
    "id": "did:example:123456789abcdefghi#keys-1",
    "type": "Ed25519VerificationKey2018",
    "controller": "did:example:123456789abcdefghi",
    "publicKeyBase58": "H3C2AVvLMv6gmMNam3uVAjZpfkcJCwDwnZn6z3wXmqPV"
  }],
  "service": [{
    
    "id":"did:example:123456789abcdefghi#vcs",
    "type": "VerifiableCredentialService",
    "serviceEndpoint": "https://example.com/vc/"
  }]
}
```

