import React from 'react'
import { usePath } from '@/hooks/usePath';
import { AuthContext } from '../../../context/AuthContext';
import { getLinks } from '../../../utils/getLinks';

// import Link from '../Link/Link'
import Link from '@/components/ui/Link/Link'
const NavbarLinks = () => {
  const { user } = React.useContext(AuthContext);
  const {uid} = user
  const links = getLinks(uid);
  const {currentPath} = usePath()
  return (
    <>
    {
      links.map((link, index) => (
        <Link key={index} path={link.path} title={link.title} active={currentPath === link.path ? true : false} />
      ))
    }
    </>
  )
}

export default NavbarLinks