import React from "react";
import { render, screen } from "@testing-library/react";

import Web-application-stackPage from "../Web-application-stackPage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders web-application-stack page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Web-application-stackPage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("web-application-stack-datatable")).toBeInTheDocument();
    expect(screen.getByRole("web-application-stack-add-button")).toBeInTheDocument();
});
