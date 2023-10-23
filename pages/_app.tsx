import React from 'react'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import { MediaQueryProvider } from '../components/base/provider/mediaQueryProvider'
import MainComponent from './Main'

const GlobalStyle = createGlobalStyle`
  ${reset}
  /* other styles */
`

function App() {
  return (
    <>
      <MediaQueryProvider>
        <GlobalStyle />
        <MainComponent />
      </MediaQueryProvider>
    </>
  )
}

export default App
