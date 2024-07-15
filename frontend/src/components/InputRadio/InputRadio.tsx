import { ReactNode } from "react";
import "./InputRadio.css";

type Props = {
  onClick?: () => void;
  children: ReactNode;
};

export const InputRadio = ({ onClick, children }: Props) => {
  return (
    <div className="input-radio">
      <input
        type="radio"
        name="radio"
        id="radio"
        onClick={onClick}
        className="input-radio__button"
      />
      <span className="input-radio__text">{children}</span>
    </div>
  );
};
