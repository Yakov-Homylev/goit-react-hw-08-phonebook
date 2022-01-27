import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;

  border: 1px solid black;
  padding: 8px;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.47, 0, 0.745, 0.715);

  :hover {
    background-color: ${props => (props.disabled ? "red" : "aqua")};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
`;

export const NavigationList = styled.div`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: baseline;
  flex-grow: 1;
`;

export const AuthorizationBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 16px;
`;
