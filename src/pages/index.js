import React from 'react'
import styled from 'styled-components'
import Link from '../components/defaultLink'

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Container key={node.id}>
          <StyledLink to={`/entry${node.fields.slug}`}>
            <H3>{node.frontmatter.title}</H3>
            <p>{node.excerpt}</p>
            <span>{node.frontmatter.date}</span>
          </StyledLink>
        </Container>
      ))}
    </div>
  )
}

const Container = styled.div`
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #eee;
  transition: 0.3s;
  &:hover {
    box-shadow: 0 3px 15px 4px rgba(0, 0, 0, 0.15);
    transform: scale(1.005);
  }
`

const H3 = styled.h3`
  margin-bottom: 20px;
`

const StyledLink = styled(Link)`
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
