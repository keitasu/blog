import React from 'react'
import styled from 'styled-components'
import Author from './author'

export default ({ className, siteTitle }) => (
  <Container className={className}>
    <Wrapper>
      <StyledAuthor />
      <Copyright>© 2018 suke</Copyright>
    </Wrapper>
  </Container>
)

const Container = styled.div`
  background: #2ac1f4;
  color: white;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1rem 1.5rem 0.8rem;
`

const Copyright = styled.div`
  text-align: center;
`
const StyledAuthor = styled(Author)`
  border-bottom: 1px solid white;
  margin-bottom: 10px;
`
