import type { Meta, StoryObj } from "@storybook/react";
import IUTextField from "./IUTextField";

const meta: Meta<typeof IUTextField> = {
  component: IUTextField,
};

export default meta;

type Story = StoryObj<typeof IUTextField>;

export const Default: Story = {
  args: {
    variant: "flushed",
    size: "lg",
    fieldType: "text",
    borderColor: "#757575",
    disabled: false,
    error: false,
    success: false
  },
};
