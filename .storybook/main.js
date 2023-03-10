module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-addon-next',
    '@tomfreudenberg/next-auth-mock/storybook'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
}
