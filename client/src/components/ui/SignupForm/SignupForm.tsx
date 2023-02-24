import { useLogin } from '@/hooks/useLogin'
import { Col, Input, Row, Spacer } from '@nextui-org/react'
import React from 'react'
import AuthTab from '../AuthTab/AuthTab'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

const SignupForm = () => {
  const {loginPopup} = useLogin()
  const img = 'https://images.unsplash.com/photo-1618520003237-a3f374c01f4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=656&q=80'
  return (
    <AuthTab textSide='right' imgPath={img} label='Create New Account'>
      <Col>
      <Input placeholder='email' type='email' fullWidth clearable />
      <Spacer y={0.5}/>
      <Input placeholder='password' type='password' fullWidth clearable />
      <Spacer y={0.5}/>
      <Input placeholder='repeate password' type='password' fullWidth clearable />
      <Spacer y={1}/>
      <ButtonCustom label='SIGN UP' css={{w: '100%'}} onPress={() => loginPopup()} />
      <Spacer y={1}/>
      <Row justify='center'>
      <span>or</span>
      </Row>
      <Spacer y={1}/>
      <ButtonCustom label='Sign up with Google' css={{w: '100%'}} onPress={() => loginPopup()} />
      </Col>
    </AuthTab>
  )
}

export default SignupForm