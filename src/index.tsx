import React from "react";
import ReactDOM from "react-dom";
import Cv from "./page";


window.onload = () => {
    window["React"] = React;
    const domContainer = document.querySelector("#main");
    console.log(domContainer);
    ReactDOM.render(<Cv/>, domContainer);
}