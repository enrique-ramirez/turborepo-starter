/* eslint-disable import/no-default-export, sort-keys */
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "./Button";
import { Props } from "./Button.types";

const componentInfo: ComponentMeta<typeof Button> = {
  title: "Example/Button",
  component: Button,
};

function Template(args: Props): ComponentStory<typeof Button> {
  return <Button {...args} />;
}

const Primary = Template.bind({});
// @ts-ignore
Primary.args = {
  children: "HOLA MUNDO",
};

export default componentInfo;
export { Primary };
