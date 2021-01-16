import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Manufacturer = styled.div `
  font-size: 20px;
  margin-bottom: 10px;
`
const Link = styled(NavLink) `
  text-decoration: none;
`

export default ({ id, name, country }) => (
  <Manufacturer key={id}>
    <Link to={`/manufacturers/${id}`}>{`${name} (${country})`}</Link>
  </Manufacturer>
)
