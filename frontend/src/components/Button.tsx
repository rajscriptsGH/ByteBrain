import type { ReactElement } from "react";

type Variants = "primary" | "secondary";
type size = "sm" | "md" | "lg";
interface ButtonProps {
  variant: Variants;
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick?: () => void;
  fullWidth?: boolean;
  loading?: boolean;
  size?: size;
}

const varientsStyle = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-600 ",
};

const sizeStyle = {
  sm: "px-3 py-2",
  md: "px-5 py-3",
  lg: "px-7 py-4",
};

const defaultStyle = "rounded-md font-normal m-2";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${varientsStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size ?? 'md']} flex justify-center ${props.loading ? "opacity-50 cursor-not-allowed" : ""} hover:bg-blue-600 transition-all hover:duration-300 hover:scale-105`}
    >
      <div className="flex items-center gap-2">
        {props.startIcon}
        {props.text}
        {props.endIcon}
      </div>
    </button>
  );
};

{
  <Button variant="primary" size="md" onClick={() => { }} text={"asd"} />;
}
