import React from "react";
import { render, screen } from "@testing-library/react";

import React-frameworksCreateDialogComponent from "../React-frameworksCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders react-frameworks create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <React-frameworksCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("react-frameworks-create-dialog-component")).toBeInTheDocument();
});
