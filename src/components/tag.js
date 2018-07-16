import React from 'react'
import styled from 'styled-components'
import Link from './defaultLink'

export default ({ className, tag }) => (
  <StyledLink className={className} key={tag} to={`/tags/${tag}`}>
    <span>{tag}</span>
  </StyledLink>
)

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0 0.5rem;
  border: 1px solid #666;
  border-radius: 10px;
`
