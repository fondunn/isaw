import { Container } from '@nextui-org/react'
import React from 'react'
import { IChildrenProps } from '../../../types/children'

const BodyLayout = ({children} : IChildrenProps) => {
  return (
    <Container css={{minHeight: 'calc(100vh - var(--nextui--navbarHeight))'}}>{children}</Container>
  )
}

export default BodyLayout