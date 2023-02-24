import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../../context/AuthContext'
import { navigateTo } from '../../../utils/navigateTo'
import ButtonCustom from '../ButtonCustom/ButtonCustom'

const ButtonAuth = () => {
  const {user} = React.useContext(AuthContext)
  const navigate = useNavigate()
  return (
    <ButtonCustom 
      onPress={() => navigateTo(navigate,'auth')}
      label={user.uid ? 'Logout' : 'Login'} 
      auto />
  )
}

export default ButtonAuth;