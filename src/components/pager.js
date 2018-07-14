import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ next, prev }) => (
  <Container>
    {prev && (
      <BaseWrapper>
        <span>prev: </span>
        <StyledLink to={`/entry${prev.fields.slug}`}>
          {prev.frontmatter.title}
        </StyledLink>
      </BaseWrapper>
    )}
    {next && (
      <BaseWrapper>
        <span>next: </span>
        <StyledLink to={`/entry${next.fields.slug}`}>
          {next.frontmatter.title}
        </StyledLink>
      </BaseWrapper>
    )}
  </Container>
)

const Container = styled.div`
  position: relative;
  width: 100%;
`

const BaseWrapper = styled.div`
  margin-bottom: 0.5rem;
`

// const BaseArraw = styled.div`
//   width: 20px;
//   height: 20px;
//   border-top: 3px solid #666;
//   border-right: 3px solid #666;
// `

// const PrevArrow = styled(BaseArraw)`
//   transform: rotate(225deg);
// `

// const NextArrow = styled(BaseArraw)`
//   transform: rotate(45deg);
// `

const StyledLink = styled(Link)`
  text-decoration: none;
`
