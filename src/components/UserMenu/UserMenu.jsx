import React from "react";
import { UserBar, LogOutButton } from "./UserMenu.styled";
import { useDispatch } from "react-redux";
import { userLogout } from "redux/authorization/authorization-operations";
import { useSelector } from "react-redux";
import { getUserEmail } from "redux/authorization/authorization-selectors";

function UserMenu() {
  const dispatch = useDispatch();
  const userEmail = useSelector(getUserEmail);
  const onLogOutClick = () => {
    dispatch(userLogout());
  };

  return (
    <UserBar>
      <p>{userEmail}</p>
      <LogOutButton type="button" onClick={onLogOutClick}>
        Log out
      </LogOutButton>
    </UserBar>
  );
}

export default UserMenu;
