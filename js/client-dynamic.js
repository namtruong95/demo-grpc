const PROTO_PATH = __dirname + '/../helloworld/helloworld.proto';

const grpc = require('grpc');
const protoLoader = require('@grpc/proto-loader');
const commander = require('commander');

commander
    .version('1.0.0', '-v, --version')
    .usage('[OPTIONS]...')
    .option('-n, --name <string>', 'Put your name')
    .parse(process.argv);
  
var packageDefinition = protoLoader.loadSync(PROTO_PATH, {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const GreeterClient = grpc.loadPackageDefinition(packageDefinition).Greeter
const client = new GreeterClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

let name = commander.opts().name || 'World';
  
client.sayHello({ name }, (error, data) => {
    if (error) throw error;

    console.log(data.message);
})

client.sayHelloAgain({ name }, (error, data) => {
    if (error) throw error;

    console.log(data.message);
})