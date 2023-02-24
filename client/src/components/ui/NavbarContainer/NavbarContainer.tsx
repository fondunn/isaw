import React from "react";
import { Button, Navbar, useTheme } from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import ButtonAuth from "../ButtonAuth/ButtonAuth";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { getLinks } from "../../../utils/getLinks";
import NavbarBrand from "../NavbarBrand/NavbarBrand";
import ButtonCustom from "../ButtonCustom/ButtonCustom";
import { navigateTo } from "@/utils/navigateTo";

const NavbarContainer = () => {
  const { isDark } = useTheme();
  const { user } = React.useContext(AuthContext);
  const {uid} = user
  const links = getLinks(uid);
  const navigate = useNavigate()
  
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
              <Button.Group>
                <Button onPress={() => navigateTo(navigate, 'auth/signin')}>Sign in</Button>
                <ButtonCustom label='Sign Up'  onPress={() => navigateTo(navigate, 'auth/signup')}/>
              </Button.Group>
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
