import React from 'react'
import styled from 'styled-components'
import icon from '../img/icon.jpg'
import TwitterIcon from '../components/twitterIcon'

export default () => (
  <Container>
    <Icon src={icon} alt="" width="70" height="70" />
    <Profile>
      <div>
        Suke<br />
        software engineer
      </div>
      <TwitterIcon />
    </Profile>
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

const Profile = styled.div``
