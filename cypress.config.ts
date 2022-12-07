import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  chromeWebSecurity: false,
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
  },
})
