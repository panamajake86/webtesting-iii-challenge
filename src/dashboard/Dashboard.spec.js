// Test away
import React from "react";
// no default export, so we're importing everyting from this library
import * as rtl from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";
import Dashboard from "./Dashboard";
import { italic } from "ansi-colors";
import expectExport from "expect";

test('defaults to unlocked and open', () => {
    const wrapper = rtl.render(<Dashboard />);
    const locked = wrapper.getByTestId(/locked/i);
    const closed = wrapper.getByTestId(/closed/i); 
    expect(locked.textContent).toMatch(/Unlocked/i);
    expect(closed.textContent).toMatch(/Open/i);
});

// test ('shows the controls and display', () => {
//     const wrapper = rtl.render(<Dashboard />);
//     const controls = wrapper.Controls;
//     const display = wrapper.Display;
//     expect(controls).toBeVisible();
//     expect(display).toBeVisible();
// });