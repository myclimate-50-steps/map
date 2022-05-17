import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryButton } from "./StoryButton";

export default {
  title: "Components/StoryButton",
  component: StoryButton,
} as ComponentMeta<typeof StoryButton>;

const Template: ComponentStory<typeof StoryButton> = (args) => (
  <StoryButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = { color: "#000", active: false, text: "Mobilität" };
