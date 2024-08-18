import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import "./iu-button.css";
import "../variables.css";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "medium" | "large";
}

const buttonStyles = cva("iu_button", {
  variants: {
    variant: {
      primary: "iu_button--primary",
      secondary: "iu_button--secondary",
      outlined: "iu_button--outlined",
    },
    size: {
      small: "iu_button--small",
      medium: "iu_button--medium",
      large: "iu_button--large",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

const IUButton = ({ children, variant, size }: ButtonProps): ReactNode => {
  return (
    <button className={buttonStyles({ variant, size })}>{children}</button>
  );
};

export default IUButton;
