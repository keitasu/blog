import React from 'react'
import Pager from '../components/pager'
import styled from 'styled-components'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>{post.frontmatter.title}</h1>
      <PostContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      <Pager {...pathContext} />
    </div>
  )
}

const PostContainer = styled.div`
  margin-bottom: 20px;
`

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
