import styled from "styled-components";

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
