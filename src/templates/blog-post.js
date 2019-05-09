import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Pager from '../components/pager'
import Tag from '../components/tag'
import Helmet from 'react-helmet'
import icon from '../img/icon.jpg'
import { graphql } from 'gatsby'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  const description = post.frontmatter.description
  const { slug } = pageContext
  const postUrl = `https://suke.io/entry${slug}`
  const iconUrl = `https://suke.io/${icon}`
  const title = `${post.frontmatter.title} | ${data.site.siteMetadata.title}`
  return (
    <Layout>
      <article>
        <Helmet
          title={title}
          meta={[
            { name: 'description', content: description },
            { rel: 'canonical', href: 'https://suke.io' },
            {
              property: 'og:title',
              content: data.site.siteMetadata.title,
            },
            { property: 'og:type', content: 'blog' },
            { property: 'og:url', content: postUrl },
            { property: 'og:image', content: iconUrl },
            { property: 'og:description', content: description },
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@suke083' },
            { name: 'twitter:player', content: '@suke083' },
          ]}
        />
        <TitleHeader>
          <h1>{post.frontmatter.title}</h1>
          <Date>{post.frontmatter.date}</Date>
          <div>
            <TagName>{1 < tags.length ? 'Tags' : 'Tag'}: </TagName>
            {tags.map(tag => (
              <StyledTag key={tag} tag={tag} />
            ))}
          </div>
        </TitleHeader>
        <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
        <Pager {...pageContext} />
      </article>
    </Layout>
  )
}

const TitleHeader = styled.div`
  padding-bottom: 10px;
  margin-bottom: 30px;
  border-bottom: 1px solid #000;
`

const PostContainer = styled.div`
  margin-bottom: 20px;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
`

const StyledTag = styled(Tag)`
  margin-right: 10px;
`

const Date = styled.div`
  display: inline-block;
  margin-bottom: 10px;
`
const TagName = styled.span`
  display: inline-block;
  margin-right: 10px;
`

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        tags
        description
      }
    }
  }
`
