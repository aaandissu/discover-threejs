const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // Add a rule for .glb files
    config.module
      .rule("glb")
      .test(/\.glb$/)
      .use("file-loader")
      .loader("file-loader")
      .options({
        name: "assets/models/[name].[hash:8].[ext]",
      });
  },
});
