import { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
    component: Text,
    argTypes: {
        size: {
            control: {
                type: 'select',
            },
            options: ['l', 'm', 's', 'xs'],
        },
        weight: {
            control: {
                type: 'select',
            },
            options: ['light', 'regular', 'bold'],
        },
        children: {
            type: 'string',
        },
    },
};

export default meta;

export const TextStory: StoryObj<typeof Text> = {
    args: {
        size: 'm',
        weight: 'regular',
        children: 'Example text',
    },
};
