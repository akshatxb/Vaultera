export interface AuthData {
    UserId: string,
    Password: string
}

export interface AuthContextData {
    UserId: string | null,
    UserToken: string | null,
    HandleLogin: (data: AuthData) => void;
    HandleLogout: () => void;
}

export interface LoginInputs {
    UserId: string,
    Password: string,
}