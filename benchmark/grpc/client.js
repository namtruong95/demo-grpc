const PROTO_PATH = __dirname + '/dummy.proto';

const grpc = require('grpc');

const protoLoader = require('@grpc/proto-loader');

var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const DummyService = grpc.loadPackageDefinition(packageDefinition).Benchmark;

const client = new DummyService(
    'localhost:30043',
    grpc.credentials.createInsecure(),
    {
        'grpc.max_receive_message_length': 1024 * 1024 * 100,
        'grpc.max_send_message_length': 1024 * 1024 * 100   
    }
);

console.time('benchmark');

client.GetAll(null, (err, data) => {
    if (err) throw err;

    console.log('Data: ', data);
    console.timeEnd('benchmark')
});
