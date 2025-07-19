import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { CrossIcon } from "../icons/CrossIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Signin = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    async function signin() {
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/signin`, {
                username,
                password,
            });
            const jwt = response.data.token
            localStorage.setItem('token', jwt)
        } catch (err) {
            alert("Signin failed. Please try again.");
            console.error(err);
        }
    }
    window.location.href = "/dashboard";

    return <div className="h-screen w-full flex justify-center items-center">
        <div className="relative flex flex-col items-center justify-center rounded-xl bg-slate-300 h-96 w-80">
            <div className="absolute top-2 right-3 ">
                <CrossIcon size="lg" />
            </div>
            <div className="flex flex-col justify-center gap-5 mb-2">
                <Input type="text" reference={usernameRef} placeholder="Username" />
                <Input type="passowrd" reference={passwordRef} placeholder="Password" />
                <Button onClick={signin} loading={false} variant="primary" text="Signin" />
            </div>
            <p>
                Don't have an account
                <span className="text-blue-600 cursor-pointer ml-2">Signup</span></p>
        </div>
    </div>;
};