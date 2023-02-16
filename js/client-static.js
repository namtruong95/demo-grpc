const messages = require('./helloworld/helloworld_pb');
const services = require('./helloworld/helloworld_grpc_pb');
const grpc = require('@grpc/grpc-js');
const commander = require('commander');

commander
    .version('1.0.0', '-v, --version')
    .usage('[OPTIONS]...')
    .option('-n, --name <string>', 'Put your name')
    .parse(process.argv);

const client = new services.GreeterClient(
    'localhost:50051',
    grpc.credentials.createInsecure()
);

let name = commander.opts().name || 'World';

const request = new messages.HelloRequest()
request.setName(name);

client.sayHello(request, (error, data) => {
    if (error) throw error;

    console.log(data.getMessage());

    process.exit()
});