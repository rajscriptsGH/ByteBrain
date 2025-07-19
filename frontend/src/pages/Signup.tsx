import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { CrossIcon } from "../icons/CrossIcon";


export const Signup = () => {
    return <div className="h-screen w-full flex justify-center items-center">
        <div className="relative flex flex-col items-center justify-center rounded-xl bg-slate-300 h-96 w-80">
            <div className="absolute top-2 right-3 ">
                <CrossIcon size="lg" />
            </div>
            <div className="flex flex-col justify-center gap-5 mb-2">
                <Input placeholder="Full name" />
                <Input placeholder="Email" />
                <Input placeholder="Password" />
                <Button loading={false} variant="primary" text="Signup" />
            </div>
            <p>
                Already have an account
                <span className="text-blue-600 cursor-pointer ml-2">Signin</span></p>
        </div>
    </div>;
};