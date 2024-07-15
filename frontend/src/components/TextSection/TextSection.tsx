import { useAtomValue } from "jotai";
import "./TextSection.scss";
import { textAtom } from "../../utils/useText";

export const TextSection = () => {
  const text = useAtomValue(textAtom);
  return (
    <div className="text-section">
      <div className="text-section__title">
        BLOK Z DŁUGĄ NAZWĄ KTÓRA SAMA SIĘ PRZYTNIE
      </div>
      <div className="text-section__text">
        {text
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((it, index) => {
            return <span key={index}>{it.text}</span>;
          })}
      </div>
    </div>
  );
};
