import { ReactNode } from "react";
import "./iu-button.css";

interface ButtonProps {
  children: ReactNode;
}

const IUButton = ({ children }: ButtonProps): ReactNode => {
  return <button className="iu_button">{children}</button>;
};

export default IUButton;
