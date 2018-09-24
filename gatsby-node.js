/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')
const _ = require('lodash')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/blog-post.js')
  const tagTemplate = path.resolve('src/templates/tags.js')

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
            next {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
            prev: previous {
              frontmatter {
                title
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      if (result.errors) {
        reject(result.errors)
      }

      const posts = result.data.allMarkdownRemark.edges
      posts.forEach(({ node, next, prev }) => {
        createPage({
          path: `/entry${node.fields.slug}`,
          component: blogPostTemplate,
          context: {
            slug: node.fields.slug,
            next,
            prev,
          },
        })
      })

      let tags = []
      _.each(posts, edge => {
        if (_.get(edge, 'node.frontmatter.tags')) {
          tags = tags.concat(edge.node.frontmatter.tags)
        }
      })

      tags.forEach(tag => {
        createPage({
          path: `/tags/${tag}/`,
          component: tagTemplate,
          context: {
            tag,
          },
        })
      })
      resolve()
    })
  })
}
