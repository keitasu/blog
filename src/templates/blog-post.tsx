import * as React from 'react'
import styled from 'styled-components'
import PostNav from '../components/pager'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Container>
        <h1>{ post.frontmatter.title }</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Container>
      <PostNav props={...pathContext} />
    </div>
  )
}

const Container = styled.div`
  box-shadow: 0 0 15px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 25px;
`

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
      html
      frontmatter {
        title
      }
    }
  }
`