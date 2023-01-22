import React from "react";
import { render, screen } from "@testing-library/react";

import Angular-framemworksCreateDialogComponent from "../Angular-framemworksCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders angular-framemworks create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Angular-framemworksCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("angular-framemworks-create-dialog-component")).toBeInTheDocument();
});
