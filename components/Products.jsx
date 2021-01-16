import React from 'react'
import styled from 'styled-components'

const Products = styled.div `
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`

export default ({ id, name, yearIntroduced }) => (
  <Products key={id}>{`${name} (${yearIntroduced})`}</Products>
)
