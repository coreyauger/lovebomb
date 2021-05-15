#!/bin/bash

echo "Compiling protobuf definitions"

OUT_DIR="./src/"
PROTOC_GEN_TS_PROTO_PATH="./node_modules/.bin/protoc-gen-ts_proto"
PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"


echo "Compiling User Service"
#protoc \
#    ../user-service/proto/user-service.proto \
#    -I node_modules/@lightbend/akkaserverless-javascript-sdk/proto/google/api/ \
#    -I node_modules/@lightbend/akkaserverless-javascript-sdk/proto/ \
#    -I node_modules/@lightbend/akkaserverless-javascript-sdk/protoc/include \
#    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
#    --ts_out=${OUT_DIR} \
#    --proto_path="../user-service"   

protoc \
    ../user-service/proto/user-service.proto \
    -I node_modules/@lightbend/akkaserverless-javascript-sdk/proto/google/api/ \
    -I node_modules/@lightbend/akkaserverless-javascript-sdk/proto/ \
    -I node_modules/@lightbend/akkaserverless-javascript-sdk/protoc/include \
    --plugin="protoc-gen-ts_proto=${PROTOC_GEN_TS_PROTO_PATH}" \
    --ts_proto_opt=esModuleInterop=true,outputServices=grpc-js \
    --ts_proto_out=${OUT_DIR} \
    --proto_path="../user-service"        
    
