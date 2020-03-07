import React from 'react'
import { Link as gatsbyLink } from 'gatsby'
import styled from 'styled-components'

export default ({ className, siteTitle }) => (
  <Container className={className}>
    <Wrapper>
      <H1>
        <Link to="/">{siteTitle}</Link>
      </H1>
    </Wrapper>
  </Container>
)

const Container = styled.header`
  background: var(--theme-ui-colors-b);
  margin-bottom: 1.45rem;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Link = styled(gatsbyLink)`
  color: white;
  text-decoration: none;
`

const H1 = styled.h1`
  margin: 0;
  color: var(--textTitle);
`
