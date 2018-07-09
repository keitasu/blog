import * as React from 'react'
import gatsbyLink from 'gatsby-link'
import styled from 'styled-components'

const Header = ({ siteTitle }) => (
  <Container>
    <Wrapper>
      <H1>
        <Link to="/">
          {siteTitle}
        </Link>
      </H1>
    </Wrapper>
  </Container>
)

const Container = styled.div`
  background: rebeccapurple;
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
`

export default Header
