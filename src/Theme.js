import React from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import style from 'styled-theming';

const GlobalStyle = createGlobalStyle`
  body {
    min-height: 100vh;
    background-color: #393939;
    font-family: 'Roboto', sans-serif;
    padding: 50px 30px;
  }

  * {
    box-sizing: border-box;
  }
`;

export default function Theme({ children }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        {children}
      </ThemeProvider>
    </>
  )
}