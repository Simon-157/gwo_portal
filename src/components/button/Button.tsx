
// libraries
import { ReactNode, MouseEvent } from "react";

// styles
import ButtonStyles from "./Button.module.css";

type ButtonProps = {
  children: ReactNode;
  type: string;
  onClick?: any;
  style?: { [key: string]: string };
  disabled?:boolean
};

const Button = ({ children, type = "solid", style, onClick, disabled }: ButtonProps) => {
  return (
    <button
      className={`${ButtonStyles.button} ${ButtonStyles[type]} btn btn-primary disabled:text-slate-50 disabled:cursor-crosshair`}
      onClick={onClick}
      style={style}
      disabled = {disabled}
    >
      {children}
    </button>
  );
};

export default Button;

