import React from "react";
import { render, screen } from "@testing-library/react";

import Svelte-frameworksPage from "../Svelte-frameworksPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders svelte-frameworks page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Svelte-frameworksPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("svelte-frameworks-datatable")).toBeInTheDocument();
    expect(screen.getByRole("svelte-frameworks-add-button")).toBeInTheDocument();
});
