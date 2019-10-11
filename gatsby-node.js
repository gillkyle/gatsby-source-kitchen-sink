const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    query {
      allPrismicBlogPost {
        nodes {
          id
          uid
        }
      }
    }
  `)

  const prismicTemplate = path.resolve("src/templates/prismic-blog-post.js")

  pages.data.allPrismicBlogPost.nodes.forEach(node => {
    createPage({
      path: `/prismic/${node.uid}`,
      component: prismicTemplate,
      context: {
        uid: node.uid,
      },
    })
  })
}
