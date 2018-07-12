import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import _ from 'lodash'

export default ({ data }) => {
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <ExtendLink to={`/entry${node.fields.slug}`}>
            <H3>
              {node.frontmatter.title} <Span>— {node.frontmatter.date}</Span>
            </H3>
            <p>{node.excerpt}</p>
          </ExtendLink>
          <div>
            {node.frontmatter.tags.map(tag => (
              <ExtendLink key={tag} to={`/tags/${_.kebabCase(tag)}`}>
                <span>{tag}</span>
              </ExtendLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const H3 = styled.h3`
  margin-bottom: 20px;
`

const Span = styled.span`
  color: #bbb;
`

const ExtendLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            tags
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
