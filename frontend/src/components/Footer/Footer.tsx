import "./Footer.scss";
import { CssIsAwesome } from "../CssIsAwesome";
import { Button } from "../Button";
import { FooterElement } from "../FooterElement";
import { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  const [isVisibility, setIsVisibility] = useState(false);

  const onClick = () => [setIsVisibility((prev) => !prev)];
  return (
    <>
      <FooterElement isVisibility={isVisibility} />
      <footer className="footer">
        <CssIsAwesome />
        <div className="footer__company">
          <hr className="footer__company__line" />
          <span className="footer__company__name">nabthat</span>
          <hr className="footer__company__line" />
        </div>
        <div>
          <Button type="footer" onClick={onClick}>
            POKAŻ{" "}
            {isVisibility ? (
              <FontAwesomeIcon icon={faChevronDown} />
            ) : (
              <FontAwesomeIcon icon={faChevronUp} />
            )}
          </Button>
        </div>
      </footer>
    </>
  );
};
