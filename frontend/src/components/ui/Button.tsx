import type { ReactElement } from "react";

export interface ButtonProps {
  variant: "primary" | "secondary" | "danger";
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  buttonText: string;
  onClick: () => void;
}

const variantStyles = {
  primary: "bg-blue-700 text-white border-2",
  secondary: "text-blue-700 bg-blue-200",
  danger: "bg-red-500 text-white",
};
export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={` m-4 px-4 py-2 rounded-lg flex items-center ${variantStyles[props.variant]}`}
    >
      {props.startIcon && (
        <span className="flex items-center mr-0.5 ">{props.startIcon}</span>
      )}
      {props.buttonText}
      {props.endIcon && (
        <span className="flex items-center ">{props.endIcon}</span>
      )}
    </button>
  );
};
