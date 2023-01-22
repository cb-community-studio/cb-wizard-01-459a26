import React from "react";
import { render, screen } from "@testing-library/react";

import Angular-framemworksEditDialogComponent from "../Angular-framemworksEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders angular-framemworks edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Angular-framemworksEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("angular-framemworks-edit-dialog-component")).toBeInTheDocument();
});
