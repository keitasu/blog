import React from 'react'
import styled from 'styled-components'
import Pager from '../components/pager'
import Tag from '../components/tag'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark

  return (
    <div>
      <TitleHeader>
        <h1>{post.frontmatter.title}</h1>
        <span>{post.frontmatter.date}</span>
        <div>
          <span>Tags: </span>
          {post.frontmatter.tags.map(tag => <StyledTag key={tag} tag={tag} />)}
        </div>
      </TitleHeader>
      <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      <Pager {...pathContext} />
    </div>
  )
}

const TitleHeader = styled.div`
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
`

const PostContainer = styled.div`
  margin-bottom: 20px;
`

const StyledTag = styled(Tag)`
  margin-right: 10px;
`

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        tags
      }
    }
  }
`
