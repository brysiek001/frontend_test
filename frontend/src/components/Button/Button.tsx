import { ReactNode } from "react";
import "./Button.css";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  type: "footer" | "main";
};
export const Button = ({ children, onClick, type }: Props) => {
  return (
    <button className={`button button__${type}`} onClick={onClick}>
      {children}
    </button>
  );
};
