import React from 'react'
import styled from 'styled-components'
import Link from '../components/defaultLink'
import Author from '../components/author'

export default ({ className, siteTitle }) => (
  <Container className={className}>
    <Wrapper>
      <StyledLink to="/">{siteTitle}</StyledLink>
      <Author />
      <Copyright>© 2018 suke</Copyright>
    </Wrapper>
  </Container>
)

const Container = styled.div`
  background: #2ac1f4;
  color: white;
`

const StyledLink = styled(Link)`
  font-size: 1.1rem;
  display: inline-block;
  margin-bottom: 0.3rem;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.5rem 0;
`

const Copyright = styled.div``
