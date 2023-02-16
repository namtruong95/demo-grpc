module demogrpc

go 1.20

require google.golang.org/grpc v1.53.0

require (
	github.com/golang/protobuf v1.5.2 // indirect
	golang.org/x/net v0.6.0 // indirect
	golang.org/x/sys v0.5.0 // indirect
	golang.org/x/text v0.7.0 // indirect
	google.golang.org/genproto v0.0.0-20230209215440-0dfe4f8abfcc // indirect
	google.golang.org/protobuf v1.28.1 // indirect
)

replace demogrpc/helloworld => ./helloworld