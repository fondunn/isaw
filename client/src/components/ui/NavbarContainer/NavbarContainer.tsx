import React from "react";
import { Navbar, useTheme } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { getLinks } from "../../../utils/getLinks";
import NavbarBrand from "../NavbarBrand/NavbarBrand";

const NavbarContainer = () => {
  const { isDark } = useTheme();
  const { user } = React.useContext(AuthContext);
  const {uid} = user
  const links = getLinks(uid);
  return (
    <Navbar shouldHideOnScroll 
    isBordered={isDark}
    >
      <NavbarBrand />
      <Navbar.Content hideIn="xs" variant="underline">
        <NavbarLinks />
      </Navbar.Content>
        {
          !user.uid && 
            <Navbar.Content>
              <ButtonAuth />
            </Navbar.Content>
        }
      {
        user.uid && (
          <Navbar.Collapse>
        {links.map(({title, path}, index) => (
          <Navbar.CollapseItem key={index}>
            <Link
              color="inherit"
              to={path}
            >
              {title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
        )
      }
    </Navbar>
  );
};

export default NavbarContainer;
