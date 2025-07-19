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
  lg: "px-8 py-4",
};

const defaultStyle = "rounded-md font-normal m-2";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${varientsStyle[props.variant]} ${defaultStyle} ${sizeStyle[props.size ?? 'md']
        } flex justify-center text-center`}
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
