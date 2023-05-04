import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { UserOpClient } from "../services/user_login.client";
import { RpcOptions } from "@protobuf-ts/runtime-rpc";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { UserEntry, UserLoginEntry } from "./user_login";

let transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:5143"
});

let options: RpcOptions = {
    interceptors: [
        {

            interceptUnary(next, method, input, options: RpcOptions): UnaryCall {
                if (!options.meta) {
                    options.meta = {};
                }
                return next(method, input, options);
            }
        }
    ],
};

let client = new UserOpClient(transport);
client = new UserOpClient(transport);

class Connect {

    Login(email: string, password: string): UnaryCall<UserLoginEntry, UserEntry> {
        return (client.login({ email: email, password: password }));
    }
}

export {Connect};