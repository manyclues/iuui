import type { Meta, StoryObj } from "@storybook/react";
import IUButton from "./IUButton";

const meta: Meta<typeof IUButton> = {
  component: IUButton,
};

export default meta;

type Story = StoryObj<typeof IUButton>;

export const Default: Story = {
  args: {
    children: "Click Me!",
  },
};
