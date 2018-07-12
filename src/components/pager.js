import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ next, prev }) => (
  <Container>
    {prev && (
      <div>
        <span>Prev: </span>
        <Link to={`/entry${prev.fields.slug}`}>{prev.frontmatter.title}</Link>
      </div>
    )}
    {next && (
      <div>
        <span>Next: </span>
        <Link to={`/entry${next.fields.slug}`}>{next.frontmatter.title}</Link>
      </div>
    )}
  </Container>
)

const Container = styled.div`
  width: 100%;
`
