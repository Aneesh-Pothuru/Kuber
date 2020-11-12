import React from 'react';
import ReactDOM from 'react-dom';
import { ButtonAppBar } from "../navBar";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ButtonAppBar></ButtonAppBar>, div)
})