import "./RadioSection.scss";
import { InputRadio } from "../InputRadio";
import { useSetAtom } from "jotai";
import { indexAtom } from "../../utils/useIndex";

export const RadioSection = () => {
  const setIndex = useSetAtom(indexAtom);

  const generatedIndex = () => {
    return Math.floor(Math.random() * 4) + 3;
  };
  const onClick = (index: number) => {
    setIndex(index);
  };
  return (
    <div className="radio-section">
      <span className="radio-section__title">BLOK PIERWSZY</span>
      <div className="radio-section__radio-buttons">
        <InputRadio onClick={() => onClick(1)}>Opcja pierwsza</InputRadio>
        <InputRadio onClick={() => onClick(2)}>Opcja druga</InputRadio>
        <InputRadio onClick={() => onClick(generatedIndex())}>
          Opcja losowa
        </InputRadio>
      </div>
    </div>
  );
};
