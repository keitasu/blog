import React from 'react'
import { Link } from 'gatsby'
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
  width: 100%;
  padding: 15px 0;
  border-top: 1px solid #000;
  font-size: 1.1rem;
`

const BaseWrapper = styled.div`
  margin-bottom: 0.5rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`
