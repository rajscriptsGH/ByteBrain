import { CrossIcon } from "../icons/CrossIcon"
import { Button } from "./Button"
import { Input } from "./Input"

interface CreateContentModelProps {
    open: boolean;
    onClose: () => void;
}

export const CreateContentModel = ({open, onClose}): CreateContentModelProps => {
    return <div>
        {open && (
            <div className="bg-slate-500 h-screen w-full opacity-90 fixed top-24 flex justify-center items-center">

                <div className="flex flex-col p-4 cursor-pointer h-80 w-80 bg-slate-700 rounded-2xl">
                    <div className="flex flex-col justify-center gap-8 ">
                        <div onClick={onClose} className="flex justify-end">
                            <CrossIcon size="lg" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <Input placeholder="Title" />
                            <Input placeholder="Link" />
                            <Input placeholder="Icon" />
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