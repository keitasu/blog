import React from 'react'
import styled from 'styled-components'
import Link from '../components/defaultLink'
import _ from 'lodash'

export default ({ className, tag }) => (
  <StyledLink className={className} key={tag} to={`/tags/${_.kebabCase(tag)}`}>
    <span>{tag}</span>
  </StyledLink>
)

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0 0.5rem;
  border: 1px solid #000;
  border-radius: 10px;
`
