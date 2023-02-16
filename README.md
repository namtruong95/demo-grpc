# protocol buffer generator

## Golang

```bash
export PATH="$PATH:$(go env GOPATH)/bin"

protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative helloworld/helloworld.proto
```

## NodeJS

```bash
npm install -g grpc-tools

grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./js/ --grpc_out=grpc_js:./js helloworld/helloworld.proto
```
