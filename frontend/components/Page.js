import React from 'react'
import Nav from './Nav'
import Meta from './Meta'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'

const theme = {
  maxWidth: '1000px',
  fontFamily: 'Muli',
  backgroundColor: '#fff'
}

const StyledPage = styled.div`
  background-color: #fff;
  color: #000;
  font-family: 'Muli';
  grid-template-columns: 253px 1fr;
  grid-template-areas: 'sidebar main';
`

const Inner = styled.main`
  max-width: 100%;
  margin-left: 253px;
  padding: 0px 50px;
  height: 100%;
  grid-area: main;
`

class Page extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <Nav />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

export default Page
