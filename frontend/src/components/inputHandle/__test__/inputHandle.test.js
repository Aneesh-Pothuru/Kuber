import React from 'react';
import ReactDOM from 'react-dom';
import InputHandle from "../inputHandle";

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<InputHandle />, div)
})