import { useLogin } from '@/hooks/useLogin'
import { Col, Input, Row, Spacer } from '@nextui-org/react'
import React from 'react'
import AuthTab from '../AuthTab/AuthTab'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

const LoginForm = () => {
  const {loginPopup} = useLogin()
  const img = 'https://images.unsplash.com/photo-1579099816874-e02eaf257e2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
  return (
    <AuthTab imgPath={img} label='Login'>
      <Col>
      <Input placeholder='email' type='email' aria-label='sign-in-username' clearable fullWidth />
      <Spacer y={0.5} />
      <Input placeholder='password' type='password' aria-label='sign-in-password' fullWidth />
      <Spacer y={1} />
      <ButtonCustom label='Sign In' css={{width: '100%'}} />
      <Spacer y={1} />
      <Row justify='center'>
      <span>or</span>
      </Row>
      <Spacer y={1} />
      <ButtonCustom auto label='Sign in with Google' css={{width: '100%'}} onPress={() => loginPopup()} />
      </Col>
    </AuthTab>
  )
}

export default LoginForm