import { Navbar, Text } from '@nextui-org/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { appTitles } from '../../../consts/appTitles'
import { AuthContext } from '../../../context/AuthContext'

const NavbarBrand = () => {
  const { user } = React.useContext(AuthContext);
  const {uid} = user
  return (
    <Navbar.Brand>
      {
        uid ?
        <>
        {
          user.uid && (
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          )
        }
        <Text b color="inherit" hideIn="xs">
          <Link to='/'>
          {appTitles.appName}
          </Link>
        </Text>
        </>
        :
        <>
        {
          user.uid && (
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
          )
        }
        <Text b color="inherit">
          <Link to='/'>
          {appTitles.appName}
          </Link>
        </Text></>
      }    
    </Navbar.Brand>
  )
}

export default NavbarBrand