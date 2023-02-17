const PROTO_PATH = __dirname + '/dummy.proto';

const grpc = require("grpc");

const protoLoader = require("@grpc/proto-loader");
const readJson = require('../read-json');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const dummyProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server({
    'grpc.max_receive_message_length': 1024 * 1024 * 100,
    'grpc.max_send_message_length': 1024 * 1024 * 100
});

server.addService(dummyProto.Benchmark.service, {
    GetAll: (_, callback) => {
        const data = readJson();

        callback(null, data);
    }
});

server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:30043");
server.start();
