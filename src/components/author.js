import React from 'react'
import styled from 'styled-components'
import icon from '../img/icon.jpg'
import TwitterIcon from './twitterIcon'

export default ({ className }) => (
  <Container className={className}>
    <Icon src={icon} alt="suke icon" width="70" height="70" />
    <div>
      <div>
        suke<br />
        Web engineer
      </div>
      <TwitterIcon />
    </div>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 0.5rem 0;
`

const Icon = styled.img`
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: 0;
`
