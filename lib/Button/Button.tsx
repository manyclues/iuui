import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
}
export const Button = ({ children }: ButtonProps): ReactNode => {
  return <button className="py-2 px-4 rounded-lg border-2">{children}</button>;
};
