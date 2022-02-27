const path = require("path");
const mix = require("laravel-mix");
const nodeExternals = require("webpack-node-externals");

mix.options({ manifest: false })
    .ts("resources/ts/ssr.tsx", "public/js")
    .react()
    .webpackConfig({
        target: "node",
        externals: [nodeExternals()],
    });
