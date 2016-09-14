var webpack = require("webpack");
var path = require("path");
var dist_dir = path.resolve(__dirname,"dist");
var src_dir = path.resolve(__dirname,"src");

var config = {
    entry: [src_dir + "/app/index_react.js"],
    output: { 
        path: dist_dir + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    module: {
        loaders:[
            {
                test: /\.js?/,
                include: src_dir,
                loader: "babel-loader",
                query: {
                    presets: ["react","es2015","stage-2"],
                    plugins: ["react-html-attrs","transform-class-properties","transform-decorators-legacy"]
                }
            }
        ]
    }
};

module.exports = config