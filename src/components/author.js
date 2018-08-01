import React from 'react'
import styled from 'styled-components'
import icon from '../img/icon.jpg'
import SocialIcon from './socialIcon'

export default ({ className }) => (
  <Container className={className}>
    <Icon src={icon} alt="suke icon" width="70" height="70" />
    <div>
      <Bio>
        suke<br />
        Web engineer
      </Bio>
      <SocialIcon />
    </div>
  </Container>
)

const Container = styled.div`
  display: flex;
  padding: 0.5rem 0;
`
const Bio = styled.div`
  margin-bottom: 5px;
`

const Icon = styled.img`
  border-radius: 50%;
  margin-right: 30px;
  margin-bottom: 0;
`
