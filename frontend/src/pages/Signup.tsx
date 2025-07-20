import { useRef } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { CrossIcon } from "../icons/CrossIcon";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";



export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)

    const navigate = useNavigate()

    async function signup() {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            alert("Please enter both username and password.");
            return;
        }

        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/signup`, {
                username,
                password,
            });

            // Store token if your backend sends it
            const token = response.data.token;
            if (token) {
                localStorage.setItem("token", token);
            }
            // Redirect to dashboard
            navigate("/dashboard");
        } catch (err) {
            alert("Signup failed. Please try again.");
            console.error(err);
        }
    }


    return <div className="h-screen w-full flex justify-center items-center">
        <div className="relative flex flex-col items-center justify-center rounded-xl bg-slate-300 h-96 w-80">
            <h1 className="text-2xl font-medium absolute top-4 left-10">Signup</h1>
            <div
                onClick={() => navigate("/")}
                className="absolute top-2 right-3 cursor-pointer ">
                <CrossIcon size="lg" />
            </div>
            <div className="flex flex-col justify-center gap-5 mb-2">
                <Input type="text" reference={usernameRef} placeholder="Username" />
                <Input type="passowrd" reference={passwordRef} placeholder="Password" />
                <Button onClick={signup}
                    loading={false} variant="primary" text="Signup" />
            </div>
            <p>
                Already have an account
                <span
                    onClick={() => navigate('/signin')}
                    className="text-blue-600 cursor-pointer ml-2">Signin</span></p>
        </div>
    </div>;
};