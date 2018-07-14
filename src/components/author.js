import React from 'react'
import styled from 'styled-components'
import icon from '../img/icon.jpg'

export default () => (
  <Container>
    <Icon src={icon} alt="" width="70" height="70" />
    <Profile>
      Suke<br />
      software engineer
    </Profile>
  </Container>
)

const Container = styled.div`
  display: flex;
`

const Icon = styled.img`
  border-radius: 50%;
  margin-right: 30px;
`

const Profile = styled.div``
