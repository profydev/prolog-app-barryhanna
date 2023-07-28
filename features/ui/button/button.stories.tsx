import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonSize } from "./button";

export default {
  title: "UI/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button>Label</Button>;

export const Default = Template.bind({});
Default.args = {
  size: ButtonSize.small,
};
Default.parameters = {
  viewMode: "docs",
};
