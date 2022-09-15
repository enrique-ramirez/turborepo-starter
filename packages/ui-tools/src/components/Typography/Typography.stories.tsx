/* eslint-disable import/no-default-export, sort-keys */
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Typography } from ".";
import type { Props } from "./Typography.types";
import { Align, Variant } from "./Typography.types";

const componentInfo: ComponentMeta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    align: { option: Object.values(Align), control: { type: "select" } },
    as: { control: { type: "text" } },
    className: { table: { disabled: true } },
    variant: { option: Object.values(Variant), control: { type: "select" } },
  },
  args: {
    align: Align.inherit,
    children:
      "The most merciful thing in the world, I think, is the inability of the human mind to correlate all its contents. We live on a placid island of ignorance in the midst of black seas of infinity, and it was not meant that we should voyage far. The sciences, each straining in its own direction, have hitherto harmed us little; but some day the piecing together of dissociated knowledge will open up such terrifying vistas of reality, and of our frightful position therein, that we shall either go mad from the revelation or flee from the deadly light into the peace and safety of a new dark age",
    variant: Variant.body1,
  },
};

function Template(args: Props): ComponentStory<typeof Typography> {
  return <Typography {...args} />;
}

const Story = Template.bind({});

export default componentInfo;
export { Story as Playground };
