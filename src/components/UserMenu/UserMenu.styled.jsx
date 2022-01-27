import styled from "styled-components";

export const UserBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LogOutButton = styled.button`
  margin-left: 16px;
  background-color: transparent;
  border: 1px solid black;
  padding: 8px;
  border-radius: 12px;
  transition: background-color 250ms cubic-bezier(0.47, 0, 0.745, 0.715);

  :hover {
    background-color: aqua;
  }
  cursor: pointer;
`;
