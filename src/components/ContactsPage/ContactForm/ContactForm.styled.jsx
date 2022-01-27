import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

export const InputName = styled.label`
  font-weight: 500;
  margin-bottom: 12px;
`;

export const Input = styled.input`
  padding: 4px 8px;
  border-radius: 8px;
  margin-left: 8px;
`;

export const AddButoon = styled.button`
  padding: 4px 8px;
  border-radius: 8px;
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.47, 0, 0.745, 0.715);
  cursor: pointer;

  :hover {
    background-color: aqua;
  }
`;
