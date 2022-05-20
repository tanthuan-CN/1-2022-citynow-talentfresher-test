// libs
import React from "react";
// layouts
import HomePage from "./pages/Home";
// others
import { ProvideLocale } from "@/contexts/LocaleContext";
import { ProvideRoom } from "@/contexts/RoomContext";

const App = () => (
  <div className="App">
    <ProvideLocale>
      <ProvideRoom>
        <HomePage />
      </ProvideRoom>
    </ProvideLocale>
  </div>
);

export default App;
