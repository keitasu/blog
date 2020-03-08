import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { graphql } from 'gatsby'

export default ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges } = data.allMarkdownRemark
  return (
    <Layout>
      <div>
        <h1>{tag}</h1>
        <ul>
          {edges.map(({ node }) => {
            const { title } = node.frontmatter
            const { slug } = node.fields
            return (
              <li key={slug}>
                <StyledLink to={`/entry${slug}`}>{title}</StyledLink>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}
const StyledLink = styled(Link)`
  color: var(--text-link);
  transition: all 0.2s;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
  font-size: 1.2rem;
  text-decoration: none;
  &:hover {
    color: var(--text-link-hover);
  }
`

export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
