import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "components/UserMenu/UserMenu";
import { Navigation, NavigationList, AuthorizationBox } from "./AppBar.styled";
import { useSelector } from "react-redux";
import { getUserLogin } from "redux/authorization/authorization-selectors";

function AppBar() {
  const isLogin = useSelector(getUserLogin);

  return (
    <Navigation>
      <NavigationList>
        <NavLink to="contacts">Contacts</NavLink>

        {isLogin ? (
          <UserMenu />
        ) : (
          <AuthorizationBox>
            <NavLink to="register">Registration</NavLink>
            <NavLink to="login">Login</NavLink>
          </AuthorizationBox>
        )}
      </NavigationList>
    </Navigation>
  );
}

export default AppBar;
