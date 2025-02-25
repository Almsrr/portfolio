exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/thank-you/)) {
    page.context.layout = "none";
    createPage(page);
  }
};
