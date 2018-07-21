import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import 'prismjs/themes/prism-tomorrow.css'
import './index.css'

const Layout = ({ children, data }) => (
  <Container>
    <StyledHeader siteTitle={data.site.siteMetadata.title} />
    <Wrapper>{children()}</Wrapper>
    <Footer />
  </Container>
)

const Container = styled.div``

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  min-height: 90vh;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
`

const StyledHeader = styled(Header)`
  margin-bottom: 40px;
`

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
