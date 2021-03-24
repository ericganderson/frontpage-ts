import React from 'react'
import { ThemeProvider } from 'styled-components'
import Layout from './components/layout'
import { GlobalStyle, theme } from './theme/global-style'

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Layout>{element}</Layout>
  </ThemeProvider>
)
