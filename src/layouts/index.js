import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Header from '../components/header'
import Footer from '../components/footer'
import './index.css'
import 'prismjs/themes/prism-tomorrow.css'

const Layout = ({ children, data }) => (
  <Container>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title} />
    <Wrapper>{children()}</Wrapper>
    <StyledFooter />
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

const StyledFooter = styled(Footer)``

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
