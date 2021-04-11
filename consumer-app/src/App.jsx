import React from "react";
import ReactDOM from "react-dom";

import Dogme from "@antgonzales/dog/Dogme";

import "./index.css";

const App = () => (
  <>
    <h1>Consumer App</h1>
    <Dogme />
  </>
);

ReactDOM.render(<App />, document.getElementById("app"));
