import React from 'react'
import Link from 'gatsby-link'

export default ({ data }) => {
  console.log(data)
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      <h1>JavaScript</h1>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <Link to={`/entry${post.node.fields.slug}`}>
              {post.node.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const JavaScriptQuery = graphql`
  query TagJavaScript {
    allMarkdownRemark(
      limit: 20
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: ["JavaScript"] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
