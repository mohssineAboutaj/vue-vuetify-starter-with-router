module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    port: 8080,
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "Vue Vuetify Starter With VueRouter";
      return args;
    });
  },
};
