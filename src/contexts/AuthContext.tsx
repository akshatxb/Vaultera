import { createContext, useState } from "react";
import { AuthContextData, AuthData } from "../types/Auth.types";

export const AuthContext = createContext<AuthContextData | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {

    const [UserId, SetUserId] = useState<string | null>(null);
    const [UserToken, SetUserToken] = useState<string | null>(localStorage.getItem('sessionid'));

    const HandleLogin = (data: AuthData) => {
        if (data.UserId === 'admin' && data.Password === 'admin') {
            SetUserId(data.UserId);
            localStorage.setItem('sessionid', 'testkey123');
            SetUserToken(localStorage.getItem('sessionid'));
        }
    }

    const HandleLogout = () => {
        SetUserId(null);
        localStorage.removeItem('sessionid')
        SetUserToken(localStorage.getItem('sessionid'));
    }

    return (
        <AuthContext.Provider value={{ UserId, UserToken, HandleLogin, HandleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;