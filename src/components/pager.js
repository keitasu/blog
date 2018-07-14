import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ next, prev }) => (
  <Container>
    {prev && (
      <div>
        <span>Prev: </span>
        <StyledLink to={`/entry${prev.fields.slug}`}>
          {prev.frontmatter.title}
        </StyledLink>
      </div>
    )}
    {next && (
      <div>
        <span>Next: </span>
        <StyledLink to={`/entry${next.fields.slug}`}>
          {next.frontmatter.title}
        </StyledLink>
      </div>
    )}
  </Container>
)

const Container = styled.div`
  width: 100%;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
