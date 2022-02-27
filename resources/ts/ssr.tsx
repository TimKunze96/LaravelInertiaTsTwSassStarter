import React from "react";
import ReactDOMServer from "react-dom/server";
import { createInertiaApp } from "@inertiajs/inertia-react";
import createServer from "@inertiajs/server";

// Require Mix & Dotenv to access environment variables
let mix = require("laravel-mix");
require("dotenv").config();

// Get the port from the environment variables
let port = process.env.MIX_INERTIA_SSR_PORT;

createServer(
    (page) =>
        createInertiaApp({
            page,
            render: ReactDOMServer.renderToString,
            resolve: (name) => require(`./Pages/${name}`),
            setup: ({ App, props }) => <App {...props} />,
        }),
    parseInt(port || "") || 13714
);
