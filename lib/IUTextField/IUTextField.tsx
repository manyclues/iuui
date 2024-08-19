import { ReactNode } from "react";
import "./iu-textfield.css";
import { cva } from "class-variance-authority";

interface TextFieldProps {
  variant?: "outline" | "unstyled" | "flushed" | "filled";
  size?: "xs" | "sm" | "md" | "lg";
  placeholder?: string;
  fieldType?: "text" | "email" | "password" | "number";
  borderColor?: string;
}
const textFieldStyles = cva("iu_textfield", {
  variants: {
    variant: {
      outline: "iu_outline",
      unstyled: "iu_unstyled",
      flushed: "iu_flushed",
      filled: "iu_filled",
    },
    size: {
      xs: "iu_xsmall",
      sm: "iu_small",
      md: "iu_medium",
      lg: "iu_large",
    },
  },
  defaultVariants: {
    variant: "outline",
    size: "md",
  },
});

const IUTextField = ({
  variant,
  size,
  placeholder,
  fieldType,
  borderColor,
}: TextFieldProps): ReactNode => {
  return (
    <input
      type={fieldType || "text"}
      className={textFieldStyles({ variant, size })}
      placeholder={placeholder ? placeholder : ""}
      style={{
        borderColor: borderColor || "initial",
      }}
    />
  );
};

export default IUTextField;
