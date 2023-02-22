import { Container } from '@nextui-org/react'
import React from 'react'
import { IChildrenProps } from '../../../types/children'

const BodyLayout = ({children} : IChildrenProps) => {
  return (
    <Container>{children}</Container>
  )
}

export default BodyLayout