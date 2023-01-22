import React from "react";
import { render, screen } from "@testing-library/react";

import Frontend-jsPage from "../Frontend-jsPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders frontend-js page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Frontend-jsPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("frontend-js-datatable")).toBeInTheDocument();
    expect(screen.getByRole("frontend-js-add-button")).toBeInTheDocument();
});
