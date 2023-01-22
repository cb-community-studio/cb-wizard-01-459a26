import React from "react";
import { render, screen } from "@testing-library/react";

import Web-application-stackEditDialogComponent from "../Web-application-stackEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders web-application-stack edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <Web-application-stackEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("web-application-stack-edit-dialog-component")).toBeInTheDocument();
});
