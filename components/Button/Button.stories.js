import Button from './Button.vue'
// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        onClick: {},
        size: {
            control: {
                type: 'select',
            },
            options: ['small', 'medium', 'large'],
        },
        icon: 'ri:home-line'
    },
};

export const Primary = {
    args: {
        primary: true,
        label: 'Button',
    },
};

export const Secondary = {
    args: {
        label: 'Button',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
    },
};
