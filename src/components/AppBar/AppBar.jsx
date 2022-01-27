import React from "react";
import UserMenu from "components/UserMenu/UserMenu";
import {
  Navigation,
  NavigationList,
  NavigationLink,
  AuthorizationBox,
} from "./AppBar.styled";
import { useSelector } from "react-redux";
import { getUserLogin } from "redux/authorization/authorization-selectors";

function AppBar() {
  const isLogin = useSelector(getUserLogin);

  return (
    <Navigation>
      <NavigationList>
        {isLogin ? (
          <>
            <NavigationLink to="contacts">Contacts</NavigationLink>
            <UserMenu />
          </>
        ) : (
          <>
            <NavigationLink disabled to="contacts">
              Contacts
            </NavigationLink>

            <AuthorizationBox>
              <NavigationLink to="register">Registration</NavigationLink>
              <NavigationLink to="login">Login</NavigationLink>
            </AuthorizationBox>
          </>
        )}
      </NavigationList>
    </Navigation>
  );
}

export default AppBar;
