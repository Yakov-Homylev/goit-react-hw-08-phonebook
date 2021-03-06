import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  Wrapper,
  FormWrapper,
  FormInput,
  ErrorMessage,
} from "./AuthorizationView.styled";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "redux/authorization/authorization-operations";
import { getUserLogin } from "redux/authorization/authorization-selectors";
import { Navigate } from "react-router-dom";

const schema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

function AuthorizationView() {
  const isLogin = useSelector(getUserLogin);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onFormSumbit = data => dispatch(userLogin(data));
  return (
    <Wrapper>
      {!isLogin ? (
        <FormWrapper onSubmit={handleSubmit(onFormSumbit)} autoComplete="off">
          <label>
            <p>Email</p>
            <FormInput {...register("email")} />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </label>
          <label>
            <p>Password</p>
            <FormInput type="password" {...register("password")} />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </label>
          <FormInput
            type="submit"
            style={{ backgroundColor: "transparent", cursor: "pointer" }}
          />
        </FormWrapper>
      ) : (
        <Navigate replace to="/contacts" />
      )}
    </Wrapper>
  );
}

export default AuthorizationView;
