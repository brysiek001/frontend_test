import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.scss";
import { useAtomValue } from "jotai";
import { personalAtom } from "../../utils/usePersonal";

export const Header = () => {
  const personal = useAtomValue(personalAtom);
  return (
    <header className="header">
      <a href="/" className="header__icon">
        <FontAwesomeIcon icon={faHtml5} className="header__icon__inside" />
      </a>
      <div className="header__text">
        <span>
          Zadanie <strong>rekrutacyjne</strong>
        </span>
        {personal && <span>Gabriel Hołubowicz</span>}
      </div>
    </header>
  );
};
