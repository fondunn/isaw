import React from 'react'
import { Link as NavLink } from 'react-router-dom'
import { ILinkProps } from '../../../types/Link'
import styles from './Link.module.scss'
const Link = ({title, path, active} : ILinkProps) => {
  return (
    <div className={active ? styles.linkWrapperActive : styles.linkWrapper}>
      <NavLink to={path}>{title}</NavLink>
    </div>
  )
}

export default Link