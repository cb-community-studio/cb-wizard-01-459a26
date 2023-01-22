import React from "react";
import { render, screen } from "@testing-library/react";

import Angular-framemworksPage from "../Angular-framemworksPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders angular-framemworks page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Angular-framemworksPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("angular-framemworks-datatable")).toBeInTheDocument();
    expect(screen.getByRole("angular-framemworks-add-button")).toBeInTheDocument();
});
