import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Layout from '../components/layout'
import Link from '../components/defaultLink'
import favicon from '../img/favicon.ico'
import icon from '../img/icon.jpg'
import { StaticQuery, graphql } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const title = data.site.siteMetadata.title
      return (
        <Layout>
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
        </Layout>
      )
    }}
  />
)

const Container = styled.article`
  box-shadow: 0 3px 5px 0 var(--box-shadow);
  padding: 16px;
  margin-bottom: 20px;
  border-radius: 5px;
  transition: 0.3s;
  background-color: var(--bgーarticle);
  &:hover {
    box-shadow: 0 3px 15px 4px var(--box-shadow-hover);
  }

  @media (prefers-color-scheme: dark) {
    box-shadow: none;
    &:hover {
      background-color: #252539;
      box-shadow: none;
    }
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
