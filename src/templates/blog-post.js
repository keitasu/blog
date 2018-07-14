import React from 'react'
import styled from 'styled-components'
import Pager from '../components/pager'
import Tag from '../components/tag'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  const tags = post.frontmatter.tags
  return (
    <div>
      <TitleHeader>
        <h1>{post.frontmatter.title}</h1>
        <Date>{post.frontmatter.date}</Date>
        <div>
          <TagName>{1 < tags.length ? 'Tags' : 'Tag'}: </TagName>
          {tags.map(tag => <StyledTag key={tag} tag={tag} />)}
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
