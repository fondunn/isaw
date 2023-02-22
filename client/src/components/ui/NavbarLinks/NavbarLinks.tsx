import React from 'react'
import { AuthContext } from '../../../context/AuthContext';
import { getLinks } from '../../../utils/getLinks';
import Link from '../Link/Link'

const NavbarLinks = () => {

  const { user } = React.useContext(AuthContext);
  const {uid} = user
  const links = getLinks(uid);

  return (
    <>
    {
      links.map((link, index) => (
        <Link key={index} path={link.path} title={link.title} />
      ))
    }
    </>
  )
}

export default NavbarLinks