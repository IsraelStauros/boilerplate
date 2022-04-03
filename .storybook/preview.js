import GlobalStyles from '../src/styles/global'

export const decorators = [
  Story => {
    return (
      <>
        <GlobalStyles />
        <Story />
      </>
    )
  }
]
// .storybook/preview.js

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
