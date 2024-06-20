import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import App from "./app";
import theme from "./theme";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <App/>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
