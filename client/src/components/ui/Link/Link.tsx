import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import { ILinkProps } from '../../../types/Link'

const Link = ({title, path} : ILinkProps) => {
  return (
    <NavLink to={path}>{title}</NavLink>
  )
}

export default Link