import { cva } from "class-variance-authority";
import { ReactNode } from "react";
import "./iu-button.css";
import "../variables.css";
import { adjustColorBrightness } from "../utils/colors/colors";

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
  color?: string;
  onClick?: () => void;
}

const buttonStyles = cva(["iu_button"], {
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
  variant = "primary",
  size = "medium",
  disabled = false,
  color,
  onClick,
}: ButtonProps): JSX.Element => {
  let inlineStyles = {};

  if (color) {
    if (variant === "tonal") {
      inlineStyles = {
        backgroundColor: adjustColorBrightness(color, 100),
        color: adjustColorBrightness(color, -80),
      };
    } else if (variant === "outlined" || variant === "text") {
      inlineStyles = { color: color, borderColor: color };
    } else {
      inlineStyles = { backgroundColor: color };
    }
  }

  return (
    <button
      className={buttonStyles({
        variant,
        size,
        disabled,
      })}
      disabled={disabled}
      style={inlineStyles}
      onClick={!disabled ? onClick : undefined}
    >
      {children}
    </button>
  );
};

export default IUButton;
