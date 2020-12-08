import React from "react";
import { useForm } from "react-hook-form";

// Firebase
import { signInWithGoogle } from "../firebase/firebase.utils";

const Login = () => {
    const { register, reset, handleSubmit } = useForm();

    const onSubmit = (formData) => {
        console.log("data", formData.email);
        console.log("data", formData.password);
        reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                name="email"
                type="email"
                value={register.email}
                ref={register}
                required
            ></input>
            <label>email</label>

            <input
                name="password"
                type="password"
                value={register.password}
                ref={register}
                required
            ></input>
            <label>password</label>

            <input type="submit" value="login"></input>
            <input onClick={signInWithGoogle} value="login with google"></input>
        </form>
    );
};

export default Login;
