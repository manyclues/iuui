import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import "./iu-button.css";
import "../variables.css";

interface ButtonProps {
  children: ReactNode;
  variant?:
    | "primary"
    | "secondary"
    | "outlined"
    | "tonal"
    | "elevated"
    | "text";
  size?: "x-small" | "small" | "medium" | "large" | "x-large";
  disabled?: boolean;
}

const buttonStyles = cva("iu_button", {
  variants: {
    variant: {
      primary: "iu_button--primary",
      secondary: "iu_button--secondary",
      outlined: "iu_button--outlined",
      tonal: "iu_button--tonal",
      elevated: "iu_button--elevated",
      text: "iu_button--text",
    },
    size: {
      "x-small": "iu_button--x-small",
      small: "iu_button--small",
      medium: "iu_button--medium",
      large: "iu_button--large",
      "x-large": "iu_button--x-large",
    },
    disabled: {
      true: "iu_button--disabled",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
    disabled: false,
  },
});

const IUButton = ({
  children,
  variant,
  size,
  disabled,
}: ButtonProps): ReactNode => {
  return (
    <button className={buttonStyles({ variant, size, disabled })}>
      {children}
    </button>
  );
};

export default IUButton;
