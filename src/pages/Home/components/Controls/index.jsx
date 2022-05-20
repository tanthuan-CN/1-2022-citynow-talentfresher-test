// libs
import React from "react";
/// components
import PageUpButton from "../PageUpButton";
import PageDownButton from "../PageDownButton";
import { HideCheckoutButton } from "../HideCheckoutButton";
import RefreshButton from "../RefreshButton";
import LocaleButton from "../LocaleButton";
// others
import "./styles.scss";

const Controls = () => (
  <div className="controls-wrapper">
    <PageDownButton />
    <PageUpButton />
    <HideCheckoutButton />
    <RefreshButton />
    <LocaleButton />
  </div>
);

export default Controls;
