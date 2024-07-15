import { useAtom, useAtomValue } from "jotai";
import { Button } from "../Button/Button";
import "./ButtonSection.scss";
import { textAtom } from "../../utils/useText";
import data from "../../utils/text.json";
import { indexAtom } from "../../utils/useIndex";

export const ButtonSection = () => {
  const [text, setText] = useAtom(textAtom);
  const textIndex = useAtomValue(indexAtom);
  const textExist = data.find((it) => it.id == textIndex);
  const textExistAdded = text.find((it) => it.id === textIndex);

  if (textExist === undefined) {
    return null;
  }

  const onAdd = () => {
    if (textExistAdded !== undefined) {
      alert(
        "Przepraszamy, taki element już jest w tekscie, proszę wybrać inny."
      );
      return null;
    }

    setText((prevText) => [...prevText, textExist]);
  };

  const onChangeText = () => {
    
    setText([textExist]);
  };
  return (
    <div className="button-section">
      <span className="button-section__title">BLOK DRUGI</span>
      <div className="button-section__buttons">
        <Button type="main" onClick={onChangeText}>
          ZASTĄP
        </Button>
        <Button type="main" onClick={onAdd}>
          DOKLEJ
        </Button>
      </div>
    </div>
  );
};
