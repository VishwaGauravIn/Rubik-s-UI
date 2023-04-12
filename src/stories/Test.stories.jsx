import React from "react";
import { storiesOf } from "@storybook/react";
import { Test } from "../components/Test";

const stories = storiesOf("Test Component", module);

stories.add("Test", () => {
  return <Test />;
});
