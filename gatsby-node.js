exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        "querystring": require.resolve("querystring-es3"),
      },
    },
  });
};

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;

  createPage({
    path: '/api/proxy.js',
    component: require.resolve('./src/api/proxy.js'),
  });
};
