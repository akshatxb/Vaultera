import { SubmitHandler, useForm } from "react-hook-form"
import { LoginInputs } from "../types/Auth.types";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Login = () => {

    const UserData = useAuth();
    const { register, handleSubmit } = useForm<LoginInputs>();

    const OnSubmit: SubmitHandler<LoginInputs> = data => {
        console.log(data)
        UserData?.HandleLogin(data);
    }

    if (UserData?.UserToken) {
        return <Navigate to='/dashboard' />
    }

    return (
        <div className="bg-black h-dvh flex justify-center items-center">
            <div className="bg-gray-300 h-96 w-80">
                <form onSubmit={handleSubmit(OnSubmit)}>
                    <input type="text" {...register("UserId")} />
                    <input type="text" {...register("Password")} />

                    <input type="submit" />
                </form>
            </div>
        </div>
    )
}

export default Login
