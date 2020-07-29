import TransportServerWSS from "mole-rpc-transport-ws/TransportServerWSS";
import MoleServer from "mole-rpc/MoleServer";
import {Server} from "ws";

const WSS_PORT = 12345;

function sum(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

async function main() {
  const server = new MoleServer({
    transports : prepareTransports(),
  });

  server.expose({sum, multiply});
  await server.run();
}

function prepareTransports() {
  return [
    new TransportServerWSS({
      wss : new Server({
        port : WSS_PORT,
      }),
    }),
  ];
}

main().catch(console.error);
