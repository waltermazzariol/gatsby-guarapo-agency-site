/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `allWorkJson`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
        allWorkJson(sort: {date: DESC}) {
            edges {
              node {
               client
                parent {
                  ... on File {
                    name
                    relativeDirectory
                  }
                }
              }
            }
          }
      }
  `)

  result.data.allWorkJson.edges.forEach(({ node }) => {
    createPage({
      path: `${node.parent.relativeDirectory}/${node.parent.name}`,
      component: path.resolve(`./src/templates/clients.jsx`),
      context: {    
        slug: node.client
      },
    })
  })
}