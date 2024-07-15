import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSetAtom } from "jotai";
import { textAtom } from "../../utils/useText";
import data from "../../utils/text.json";
import { personalAtom } from "../../utils/usePersonal";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import "./FooterElement.scss";

type Props = {
  isVisibility: boolean;
};
export const FooterElement = ({ isVisibility }: Props) => {
  const setText = useSetAtom(textAtom);
  const setPersonal = useSetAtom(personalAtom);

  const textExist = data.find((it) => it.id === 1);
  if (textExist === undefined) {
    return null;
  }
  const onReset = () => {
    setText([textExist]);
  };
  const onPersonal = () => {
    setPersonal((prev) => !prev);
  };
  return (
    <div
      className={`footer-element ${
        isVisibility && "footer-element__visibility"
      }`}
    >
      <div onClick={onReset} className="footer-element__button">
        <FontAwesomeIcon icon={faChevronRight} /> ZRESETUJ USTAWIENIA
      </div>
      <div onClick={onPersonal} className="footer-element__button">
        <FontAwesomeIcon icon={faChevronRight} /> POKAŻ DANE OSOBOWE
      </div>
    </div>
  );
};
