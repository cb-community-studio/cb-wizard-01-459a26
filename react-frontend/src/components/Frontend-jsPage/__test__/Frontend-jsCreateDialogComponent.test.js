import React from "react";
import { render, screen } from "@testing-library/react";

import Frontend-jsCreateDialogComponent from "../Frontend-jsCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders frontend-js create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Frontend-jsCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("frontend-js-create-dialog-component")).toBeInTheDocument();
});
