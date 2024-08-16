import { ReactNode } from "react";
// import "./iu-button.css";

interface ButtonProps {
  children: ReactNode;
}

export const IUButton = ({ children }: ButtonProps): ReactNode => {
  return (
    <button className="border-2 px-4 py-2 bg-red rounded-lg">{children}</button>
  );
};
