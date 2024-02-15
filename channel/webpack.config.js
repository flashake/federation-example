const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const ExternalTemplateRemotesPlugin = require("external-remotes-plugin");
const path = require("path");

module.exports = {
    entry: './src/main',
    mode: "development",
    devServer: {
        static: path.join(__dirname, "dist"),
        port: 3001,
        historyApiFallback: true,
        hot: true,
        liveReload: true,
        open: true,
    },
    output: {
        publicPath: "auto",
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/,
                options: {
                    presets: ["@babel/preset-react"],
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "Channel",
            filename: 'remoteEntry.js',
            remotes: {
                main: `promise import("http://localhost:3002/assets/remoteEntry.js")`,
            },
            shared: {react: {singleton: true}, "react-dom": {singleton: true}},
        }),
        new ExternalTemplateRemotesPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
    ],
};

