// libs
import React from "react";
// contexts
import { ProvideLocale } from "./contexts/LocalContext";
import { ProvideControl } from "./contexts/ControlContext";
// components
import Home from "./pages/Home";
// others
import "./App.scss";

const App = () => (
  <ProvideControl>
    <ProvideLocale>
      <Home />
    </ProvideLocale>
  </ProvideControl>
);

export default App;
