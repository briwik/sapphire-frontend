import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap/uikit/dist/theme'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Book Antiqua';
    src: url('fonts/BookAntiqua.eot');
    src: url('fonts/BookAntiqua.eot?#iefix') format('embedded-opentype'),
        url('fonts/BookAntiqua.woff2') format('woff2'),
        url('fonts/BookAntiqua.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  * {
    font-family: 'Book Antiqua', sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
