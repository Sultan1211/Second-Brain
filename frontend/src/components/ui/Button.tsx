import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  buttonText: string;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-[#5046e4] text-white text-shadow-md border-2",
  secondary: "text-[#6862ce] bg-[#e0e7ff]",
  danger: "bg-red-500 text-white",
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={` m-2 px-4 py-2 rounded-lg font-semibold flex items-center shadow-lg tracking-wide ${variantStyles[props.variant]}`}
    >
      {props.startIcon && (
        <span className="flex items-center mr-1 ">{props.startIcon}</span>
      )}
      {props.buttonText}
      {props.endIcon && (
        <span className="flex items-center ">{props.endIcon}</span>
      )}
    </button>
  );
};
