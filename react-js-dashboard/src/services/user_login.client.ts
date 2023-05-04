import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { UserOp } from "../services/user_login";
import type { UserDeleteEntry } from "../services/user_login";
import type { ResultStat } from "../services/user_login";
import type { UserEntry_Data } from "../services/user_login";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { UserEntry } from "../services/user_login";
import type { UserLoginEntry } from "../services/user_login";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";

export interface IUserOpClient {

    login(input: UserLoginEntry, options?: RpcOptions): UnaryCall<UserLoginEntry, UserEntry>;

    userAdd(input: UserEntry_Data, options?: RpcOptions): UnaryCall<UserEntry_Data, UserEntry>;

    userUpdate(input: UserEntry_Data, options?: RpcOptions): UnaryCall<UserEntry_Data, ResultStat>;

    userDelete(input: UserDeleteEntry, options?: RpcOptions): UnaryCall<UserDeleteEntry, ResultStat>;
}

export class UserOpClient implements IUserOpClient, ServiceInfo {
    typeName = UserOp.typeName;
    methods = UserOp.methods;
    options = UserOp.options;
    constructor(private readonly _transport: RpcTransport) {
    }

    login(input: UserLoginEntry, options?: RpcOptions): UnaryCall<UserLoginEntry, UserEntry> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<UserLoginEntry, UserEntry>("unary", this._transport, method, opt, input);
    }

    userAdd(input: UserEntry_Data, options?: RpcOptions): UnaryCall<UserEntry_Data, UserEntry> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<UserEntry_Data, UserEntry>("unary", this._transport, method, opt, input);
    }

    userUpdate(input: UserEntry_Data, options?: RpcOptions): UnaryCall<UserEntry_Data, ResultStat> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UserEntry_Data, ResultStat>("unary", this._transport, method, opt, input);
    }

    userDelete(input: UserDeleteEntry, options?: RpcOptions): UnaryCall<UserDeleteEntry, ResultStat> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<UserDeleteEntry, ResultStat>("unary", this._transport, method, opt, input);
    }
}
