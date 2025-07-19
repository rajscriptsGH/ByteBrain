import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { CrossIcon } from "../icons/CrossIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Signup = () => {
    const emailRef = useRef<HTMLInputElement>(null)
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    async function signup() {
        const email = emailRef.current?.value
        const username = usernameRef.current?.value
        const password = passwordRef.current?.value

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                email,
                username,
                password
            });
            console.log("Signup success:", response.data);
        } catch (error) {
            console.error("Signup failed:", error);
        }
    }

    return <div className="h-screen w-full flex justify-center items-center">
        <div className="relative flex flex-col items-center justify-center rounded-xl bg-slate-300 h-96 w-80">
            <div className="absolute top-2 right-3 ">
                <CrossIcon size="lg" />
            </div>
            <div className="flex flex-col justify-center gap-5 mb-2">
                <Input reference={usernameRef} placeholder="Full name" />
                <Input reference={emailRef} placeholder="Email" />
                <Input reference={passwordRef} placeholder="Password" />
                <Button onClick={signup} loading={false} variant="primary" text="Signup" />
            </div>
            <p>
                Already have an account
                <span className="text-blue-600 cursor-pointer ml-2">Signin</span></p>
        </div>
    </div>;
};