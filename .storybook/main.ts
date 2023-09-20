import path from 'path'
import { loadConfigFromFile, mergeConfig } from 'vite'

const config = {
  stories: [
    "../components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(baseConfig) {
    const viteConfigFilePath = path.resolve(__dirname, "../vite.config.ts")
    //@ts-ignore
    const { config: userConfig } = await loadConfigFromFile(viteConfigFilePath)
    return mergeConfig(baseConfig, userConfig)
  }
};
export default config;
