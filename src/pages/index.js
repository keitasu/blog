import React from 'react'
import styled from 'styled-components'
import Link from '../components/defaultLink'

export default ({ data }) => {
  return (
    <div>
      <h4>{data.allMarkdownRemark.totalCount} posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Container key={node.id}>
          <ExtendLink to={`/entry${node.fields.slug}`}>
            <H3>{node.frontmatter.title}</H3>
            <p>{node.excerpt}</p>
            <span>{node.frontmatter.date}</span>
          </ExtendLink>
        </Container>
      ))}
    </div>
  )
}

const Container = styled.div`
  box-shadow: 0 0 5px 1px rgba(0, 0, 0, 0.25);
  padding: 10px;
  margin-bottom: 20px;
`

const H3 = styled.h3`
  margin-bottom: 20px;
`

const ExtendLink = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 100%;
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
            date(formatString: "YYYY/MM/DD")
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
