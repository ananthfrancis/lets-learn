import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }

  render() {
  return (
    <div>
      <h1>Introduction</h1>
      <p> Building this website for sharing my knowledge. Look for more articles with example in near future</p>
    </div>
  )
}
}

render(React.createElement(App), document.getElementById("root"));
