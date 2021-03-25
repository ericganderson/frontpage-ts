import { MDXProvider } from '@mdx-js/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './components/layout'
import { H1 } from './components/page-elements'
import { GlobalStyle, theme } from './theme/global-style'

const components = {
  h2: (props) => <H1 {...props} />,
}

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <MDXProvider components={components}>
      <Layout>{element}</Layout>
    </MDXProvider>
  </ThemeProvider>
)
