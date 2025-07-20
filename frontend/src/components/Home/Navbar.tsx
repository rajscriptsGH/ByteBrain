import { BrainIcon } from "../../icons/BrainIcon"
import { Button } from "../Button"
import { useNavigate } from "react-router-dom"


export const Navbar = () => {
    const navigate = useNavigate()

    return <div className="p-8">
        <div className="flex justify-between items-center">
            <div
                className="flex items-center justify-center ml-10 mb-10">
                <BrainIcon size="xl" />
                <h1 onClick={() => {
                    navigate('/')
                }} className="text-4xl font-semibold ml-3 cursor-pointer">ByteBrain</h1>
            </div>
            <div className='flex justify-end items-end mt-[-25px] mr-10 h-fit w-fit ml-4'>
                <Button
                    variant="primary"
                    size="lg"
                    text="Signup"
                    onClick={() => {
                        navigate('/signup')
                    }}
                />
            </div>

        </div>
    </div>
}