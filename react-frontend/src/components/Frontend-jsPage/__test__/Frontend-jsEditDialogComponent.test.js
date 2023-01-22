import React from "react";
import { render, screen } from "@testing-library/react";

import Frontend-jsEditDialogComponent from "../Frontend-jsEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders frontend-js edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Frontend-jsEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("frontend-js-edit-dialog-component")).toBeInTheDocument();
});
