import React, { useState, useReducer } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import AppNavbar from "./components/layout/AppNavbar";
import Dashboard from "./components/layout/Dashboard";

const theme = {
  black: "#333",
  white: "#fff",
  red: "rgb(255, 109, 125)",
  primary: "#007bff",
  secondary: "lightgrey"
};

const gridLayout = `
    "header header header" 
    "nav dashboard ads" 
    "footer footer footer"
`;

const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
    font-size: 10px;
}
*,
*:before,
*:after {
    box-sizing: inherit;
}

body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}

.App {
    display: grid;
    grid-template-areas: ${gridLayout};
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 20% 1fr 15%;
    grid-gap: 10px;
    height: 100vh;
}

footer,
dashboard,
nav,
#siteAds {
    padding: 20px;
    background: lightgrey;
}

#pageFooter {
    grid-area: footer;
}

#mainNav {
    grid-area: nav;
    margin-left: 1rem;
}
#siteAds {
    grid-area: ads;
    margin-right: 1rem;
}
a {
    text-decoration: none;
    color: ${theme.black};
}
button {
    font-family: 'Roboto', sans-serif;
}
`;

const Button = styled.button`
  color: ${props => props.theme.black};
`;

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <div className="App">
            <GlobalStyle />
            <AppNavbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
            </Switch>
            <nav id="mainNav" />
            <div id="siteAds">Ads</div>
            <footer id="pageFooter">Footer</footer>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
