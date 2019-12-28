const path = require("path");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        $components: path.resolve(__dirname, "src/components"),
        $articles: path.resolve(__dirname, "content/articles"),
        $lib: path.resolve(__dirname, "src/lib")
      }
    }
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    createNodeField({
      name: `sourceInstanceName`,
      node,
      value: parent.sourceInstanceName
    });
    createNodeField({
      name: `name`,
      node,
      value: parent.name
    });
  }
};
