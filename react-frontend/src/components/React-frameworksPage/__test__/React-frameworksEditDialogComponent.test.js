import React from "react";
import { render, screen } from "@testing-library/react";

import React-frameworksEditDialogComponent from "../React-frameworksEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders react-frameworks edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <React-frameworksEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("react-frameworks-edit-dialog-component")).toBeInTheDocument();
});
