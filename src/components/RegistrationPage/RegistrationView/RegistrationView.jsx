import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  FormWrapper,
  FormInput,
  ErrorMessage,
} from "./RegistrationView.styled";
import { userRegistration } from "redux/authorization/authorization-operations";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin } from "redux/authorization/authorization-selectors";
import { Navigate } from "react-router-dom";

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .min(7, "Min 7 symbols")
      .max(16, "Max 16 symbols")
      .required(),
  })
  .required();

function RegistrationView() {
  const isLogin = useSelector(getUserLogin);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onFormSumbit = data => dispatch(userRegistration(data));
  return (
    <div>
      <FormWrapper onSubmit={handleSubmit(onFormSumbit)} autoComplete="off">
        <label>
          <p>Name</p>
          <FormInput {...register("name")} />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>
        </label>
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
        <FormInput type="submit" />
      </FormWrapper>
      {isLogin && <Navigate to="/contacts" />}
    </div>
  );
}

export default RegistrationView;
