import React, { useEffect } from 'react'

import { Row, Spacer } from '@nextui-org/react'
import AuthFormContainer from '../AuthFormContainer/AuthFormContainer'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

import LoginForm from '../LoginForm/LoginForm'
import SignupForm from '../SignupForm/SignupForm'
import { usePath } from '@/hooks/usePath'
import { navigateTo } from '@/utils/navigateTo'
import { useNavigate } from 'react-router-dom'
import { changeDisplayedTabHandler, getPathkey, tabs } from './helpers'

const SwitchTabs = () => {
  const navigate = useNavigate()
  const {currentPath} = usePath()
  useEffect(() => {
    if (currentPath !== '/auth/signin' && currentPath !== '/auth/signup') {
      navigateTo(navigate, 'auth/signin')
    }
  }, [])

  const pathKey = getPathkey(currentPath)
  return (
    <div>
      <AuthFormContainer>
      <Row justify='space-around'
      css={{'@xsMax': {padding: '2rem !important' } }}
      >
        <ButtonCustom 
          bordered={tabs[pathKey] === 1 ? false : true} 
          label='SIGN IN' 
          onPress={() => changeDisplayedTabHandler(navigate, 'signin')}
          css={{'@xsMax': {minWidth: '100px' } }}
        />
        <ButtonCustom 
          bordered={tabs[pathKey] === 2 ? false : true} 
          label='SIGN UP' 
          onPress={() => changeDisplayedTabHandler(navigate, 'signup')}  
          css={{'@xsMax': {minWidth: '100px' } }}
        />
      </Row>
      <Spacer y={1} />
        {
          pathKey === 'signin' ?
          <LoginForm />
          :
          <SignupForm />
        }
      </AuthFormContainer>
    </div>
  )
}

export default SwitchTabs