import React from "react";
import { render, screen } from "@testing-library/react";

import React-frameworksPage from "../React-frameworksPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders react-frameworks page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <React-frameworksPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("react-frameworks-datatable")).toBeInTheDocument();
    expect(screen.getByRole("react-frameworks-add-button")).toBeInTheDocument();
});
