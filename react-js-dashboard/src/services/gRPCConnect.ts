import { GrpcWebFetchTransport } from "@protobuf-ts/grpcweb-transport";
import { UserOpClient } from "./user_login.client";
import { RpcOptions } from "@protobuf-ts/runtime-rpc";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { UserEntry, UserLoginEntry, UserEntry_Data, ResultStat, UserDeleteEntry } from "./user_login";

let transport = new GrpcWebFetchTransport({
    baseUrl: "http://localhost:5143"
});
let client = new UserOpClient(transport);



const getTokenFromLocalStorage = (): string => {
    try {
        return localStorage.getItem('Token')!;
    } catch (error) {
        return "";
    }
};

let _token: string = getTokenFromLocalStorage() as unknown as string;

const getDataFromLocalStorage = (): JSON => {
    try {
        return JSON.parse(sessionStorage.getItem('Data') || '');
    } catch (error) {
        return JSON.parse("0");
    }
};

let _UserEntry_Data: UserEntry_Data = (getDataFromLocalStorage()) as unknown as UserEntry_Data;

let setUserEntry_Data = (data: UserEntry_Data): void => {
    sessionStorage.setItem('Data', JSON.stringify(data));
}


let setToken = (tkn: string): void => {
    localStorage.setItem('Token', tkn);
}




let authorizationOptions: RpcOptions = {
    interceptors: [
        {
            interceptUnary(next, method, input, options: RpcOptions): UnaryCall {
                if (!options.meta) {
                    options.meta = {};
                }
                options.meta['Authorization'] = _token!;
                return next(method, input, options);
            }
        }
    ],
};




class Connect {

    AddToken(token: string): void {
        setToken(token);
    }

    AddData(data: UserEntry_Data): void {
        setUserEntry_Data(data);
    }

    GetData(): UserEntry_Data {
        return _UserEntry_Data;
    }

    Logout(): void {
        sessionStorage.clear();
        localStorage.clear();
    }

    CheckLogin(): string {
        if (_token == null) {
            return "notlogin";
        }
        else {
            return "login";
        }
    }

    Login(email: string, password: string): UnaryCall<UserLoginEntry, UserEntry> {
        return (client.login({ email: email, password: password }));
    }

    AddUser(user: UserEntry_Data): UnaryCall<UserLoginEntry, UserEntry> {
        return (client.userAdd(user));
    }

    UserUpdate(user: UserEntry_Data): UnaryCall<UserEntry_Data, ResultStat> {
        return (client.userUpdate(user, authorizationOptions));
    }

    UserDelete(): UnaryCall<UserDeleteEntry, ResultStat> {
        return (client.userDelete([], authorizationOptions));
    }
}

export { Connect };