import { IChildrenProps } from '@/types/children'
import { Container } from '@nextui-org/react'
import React from 'react'

const AuthFormContainer = ({children}: IChildrenProps) => {
  return (
    <Container css={{mw: 800}}>{children}</Container>
  )
}

export default AuthFormContainer