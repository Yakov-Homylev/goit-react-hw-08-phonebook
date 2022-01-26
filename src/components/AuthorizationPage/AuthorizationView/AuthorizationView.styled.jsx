import styled from "styled-components";

export const FormWrapper = styled.form`
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  padding: 16px;
  margin: 0 auto;
  width: 400px;
  border-radius: 12px;
`;

export const FormInput = styled.input`
  padding: 4px 8px;
  border-radius: 8px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 500;
`;
