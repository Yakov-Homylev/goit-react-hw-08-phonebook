import styled from "styled-components";

export const List = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;

  padding: 0;
  margin: 0 auto;

  list-style: none;
`;

export const Item = styled.li`
  padding: 8px;

  gap: 12px;
  border-radius: 12px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NumberSpan = styled.span`
  font-weight: 600;
  margin-left: 4px;
  margin-right: 4px;
`;

export const DeleteButton = styled.button`
  padding: 4px;
  border-radius: 4px;
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
  cursor: pointer;

  :hover {
    background-color: skyblue;
  }
  :disabled {
    background-color: red;
  }
`;

export const Notification = styled.p`
  color: red;
  font-weight: 700;
`;
