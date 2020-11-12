import React from 'react';
import ReactDOM from 'react-dom';
import Items from "../items";
import { MemoryRouter } from "react-router-dom"

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
        <MemoryRouter>
            <Items />
        </MemoryRouter>, div)
})