import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { CSSReset, ThemeProvider } from "@chakra-ui/core";
import * as serviceWorker from "./serviceWorker";
import customTheme from "./theme";
import { SpellsContextProvider } from "./contexts/SpellsContext";
import { CharacterContextProvider } from "./contexts/CharacterContext";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <CharacterContextProvider>
        <SpellsContextProvider>
          <App />
        </SpellsContextProvider>
      </CharacterContextProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
