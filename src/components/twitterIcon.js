import React from 'react'
import styled from 'styled-components'
const label = 'twitter icon'
import twitterIcon from '../img/twitter.png'

export default () => (
  <Container href="https://twitter.com/suke083" target="_brank">
    <Img
      src={twitterIcon}
      width="25"
      height="25"
      alt={label}
      aria-label={label}
    />
  </Container>
)

const Container = styled.a`
  display: block;
  width: 25px;
  height: 25px;
`

const Img = styled.img`
  margin: 0;
`
