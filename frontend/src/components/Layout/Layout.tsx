import { ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import "./Layout.scss";

type Props = {
  children: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__main">{children}</div>
      <Footer />
    </div>
  );
};
