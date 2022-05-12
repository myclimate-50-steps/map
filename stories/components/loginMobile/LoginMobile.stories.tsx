import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { LoginMobile } from "./LoginMobile";

export default {
  title: "Components/LoginMobile",
  component: LoginMobile,
  argTypes: {
    toggled: Boolean,
  },
} as ComponentMeta<typeof LoginMobile>;

const Template: ComponentStory<typeof LoginMobile> = (args) => (
  <LoginMobile {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  toggled: false,
};
