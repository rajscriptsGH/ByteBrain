
import { Button } from "../Button";
import { Navbar } from "./Navbar";

export const Home = () => {
    return (
        <div className="bg-blue-300 min-h-screen w-full flex flex-col">
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col justify-center items-center flex-1 px-6">
                <h1 className="text-5xl lg:text-6xl font-bold text-center mt-5">
                    Welcome to <span className="text-orange-600">ByteBrain</span>
                </h1>
                <p className="text-2xl mt-6 font-medium text-center text-gray-800">
                    Your Second Brain for a Smarter You
                </p>
                <p className="text-md text-gray-700 mt-6 text-center max-w-[550px] leading-relaxed">
                    Store your thoughts, save content you care about, and organize
                    everything in one place. From creators to coders, ByteBrain gives your
                    ideas a home.
                </p>

                <div className="mt-10">
                    <Button
                        variant="primary"
                        size="lg"
                        text="Get Started For Free ->"
                        onClick={() => {
                            window.location.href = "/signin";
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
