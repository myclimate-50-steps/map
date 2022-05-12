import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Login } from "./Login";

export default {
  title: "Components/Login",
  component: Login,
  argTypes: {
    toggled: Boolean,
  },
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  toggled: false,
};
