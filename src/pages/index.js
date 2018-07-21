import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from '../components/defaultLink'
import favicon from '../img/favicon.ico'
import icon from '../img/icon.jpg'

export default ({ data }) => {
  const title = data.site.siteMetadata.title
  return (
    <div>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: 'このブログはsukeの技術ブログです。',
          },
          { property: 'og:title', content: title },
          { property: 'og:type', content: 'blog' },
          { property: 'og:url', content: 'https://suke.io' },
          { property: 'og:image', content: icon },
          { property: 'og:description', content: 'suke blog' },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:site', content: '@suke083' },
          { name: 'twitter:player', content: '@suke083' },
        ]}
        link={[
          { rel: 'icon', type: 'image/ico', href: `${favicon}` },
          { rel: 'canonical', href: 'https://suke.io' },
        ]}
      />
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
    site {
      siteMetadata {
        title
      }
    }
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
