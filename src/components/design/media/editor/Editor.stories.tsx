import React from "react";
import { Editor } from "./Editor";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Design System/Media/Editor",
    component: Editor,
    argTypes: {},
    decorators: [],
} as ComponentMeta<typeof Editor>;

const Template: ComponentStory<typeof Editor> = (args) => <Editor />;

export const Default = Template.bind({});
