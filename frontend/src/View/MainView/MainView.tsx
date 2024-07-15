import {
  ButtonSection,
  RadioSection,
  TextSection,
  Title,
} from "../../components";
import "./MainView.css";

export const MainView = () => {
  return (
    <div className="main-view">
      <Title />
      <div className="main-view__sections">
        <RadioSection />
        <ButtonSection />
        <TextSection />
      </div>
    </div>
  );
};
