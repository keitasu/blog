import * as React from 'react'
import styled from 'styled-components'
import gatsbyLink from 'gatsby-link'
import * as _ from 'lodash'

export default ({ data }) => {
  return (
    <div>
      <h4>{ data.allMarkdownRemark.totalCount}  posts</h4>
      { data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={ node.id }>
          <Link
            to={ `/entry${ node.fields.slug }` }
          >
          <H3>
            { node.frontmatter.title }{' '}
            <Span>— { node.frontmatter.date }</Span>
          </H3>
          <p>{ node.excerpt }</p>
          </Link>
          <div>
            { node.frontmatter.tags.map((tag, index)=> (
              <Link key={ index } to={ `/tags/${ _.kebabCase(tag) }`}>
                <span>{ tag }</span>
              </Link>
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

const Link = styled(gatsbyLink)`
  text-decoration: none;
  color: inherit;
`

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
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