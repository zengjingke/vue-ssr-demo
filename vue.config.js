const NODE_TARGET = process.env.RUN_ENV;
const TARGER = NODE_TARGET === "server" ? true : false;
const VueSSRServerPlugin = require("vue-server-renderer/server-plugin");
const VueSSRClientPlugin = require("vue-server-renderer/client-plugin");

module.exports = {
  outputDir: `dist/${NODE_TARGET}`,
  publicPath: "./",
  configureWebpack: {
    entry: `./src/entry-${NODE_TARGET}.js`,
    target: TARGER ? "node" : "web",
    devtool: "eval",
    output: {
      libraryTarget: TARGER ? "commonjs2" : undefined
    },
    optimization: { splitChunks: TARGER ? false : undefined },
    plugins: [TARGER ? new VueSSRServerPlugin() : new VueSSRClientPlugin()]
  }
};
