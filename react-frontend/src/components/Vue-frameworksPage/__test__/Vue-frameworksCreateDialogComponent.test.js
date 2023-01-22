import React from "react";
import { render, screen } from "@testing-library/react";

import Vue-frameworksCreateDialogComponent from "../Vue-frameworksCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders vue-frameworks create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Vue-frameworksCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("vue-frameworks-create-dialog-component")).toBeInTheDocument();
});
