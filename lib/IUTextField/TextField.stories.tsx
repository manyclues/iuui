import type { Meta, StoryObj } from "@storybook/react";
import IUTextField from "./IUTextField";

const meta: Meta<typeof IUTextField> = {
  component: IUTextField,
};

export default meta;

type Story = StoryObj<typeof IUTextField>;

export const Default: Story = {
  args: {},
};
