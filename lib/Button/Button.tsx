import { ReactNode } from "react";
import "./button.css";

interface ButtonProps {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps): ReactNode => {
  return <button className="button">{children}</button>;
};
