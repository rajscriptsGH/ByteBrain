import type {  ReactElement } from "react";


type Varients = 'primary' | 'secondary'
interface  ButtonProps  {
    varient: Varients;
    text: string;
    startIcon?: ReactElement;
    onClick?: ()=> void;
    fullWidth?: boolean;
    loading?: boolean;
}

const VarientsStyle = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-400 text-purple-600"
}

export const Button = (props: ButtonProps) =>{
   return <button className={VarientsStyle[props.varient]}>{props.text}</button>
}