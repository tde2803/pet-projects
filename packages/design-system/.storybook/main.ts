import { StorybookConfig } from '@storybook/react-webpack5';
import customWebpackConfig from '../webpack.config';

const config: StorybookConfig = {
    framework: '@storybook/react-webpack5',
    stories: ['../src/**/*.stories.tsx'],
    addons: ['@storybook/addon-essentials'],
    webpackFinal: (storybookOriginalConfig) => ({
        ...storybookOriginalConfig,
        module: {
            ...customWebpackConfig.module,
        },
    }),
};

export default config;
