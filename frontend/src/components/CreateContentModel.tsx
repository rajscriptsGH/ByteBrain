import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"

interface CreateContentModelProps {
    open: boolean;
    onClose: () => void;
}


export const CreateContentModel = ({ open, onClose }: CreateContentModelProps) => {
    return <div className="flex justify-center items-center lg:ml-80">
        {open && (
            <div className="bg-slate-500/80 h-screen w-full fixed top-24 right-0 lg:left-80 flex justify-center items-center">

                <div className="flex flex-col p-4 cursor-pointer h-auto w-96 bg-slate-400 rounded-2xl lg:mr-36">
                    {/* //input div */}
                    <div className="flex flex-col justify-center items-center gap-8 relative ">
                        <div onClick={onClose} className="flex justify-end absolute top-0 right-0">
                            <CrossIcon size="lg" />
                        </div>
                        <div className="flex flex-col mt-10 gap-5">
                            <Input placeholder="Title*" />
                            <Input placeholder="Link*" />
                            <Input placeholder="Type*" />
                            <Input placeholder="Details" />
                        </div>
                        <div className="flex justify-center rounded-2xl items-center w-full">
                            <Button variant="primary" text="Submit" />
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
}