import React from 'react'
import styled from 'styled-components'
const twitterLabel = 'twitter icon'
const githubLabel = 'github icon'
import twitterIcon from '../img/twitter.png'
import githubIcon from '../img/GitHub-Mark-Light-64px.png'
export default ({ className }) => (
  <Container className={className}>
    <Link href="https://twitter.com/suke083" target="_brank">
      <Img
        src={twitterIcon}
        width="25"
        height="25"
        alt={twitterLabel}
        aria-label={twitterLabel}
      />
    </Link>
    <Link href="https://github.com/suke" target="_brank">
      <Img
        src={githubIcon}
        width="25"
        height="25"
        alt={githubLabel}
        aria-label={githubLabel}
      />
    </Link>
  </Container>
)

const Container = styled.div`
  display: flex;
`

const Link = styled.a`
  display: inline-block;
  margin: 0 10px 0 0;
  width: 25px;
  height: 25px;
`

const Img = styled.img``
