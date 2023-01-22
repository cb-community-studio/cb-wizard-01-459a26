import React from "react";
import { render, screen } from "@testing-library/react";

import Vue-frameworksEditDialogComponent from "../Vue-frameworksEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders vue-frameworks edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Vue-frameworksEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("vue-frameworks-edit-dialog-component")).toBeInTheDocument();
});
