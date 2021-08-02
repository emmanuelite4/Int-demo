import React from "react";
import { useSelector } from "react-redux";

import styled from "@emotion/styled";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import ErrorAlert from "../../views/components/ErrorAlert/ErrorAlert";
import AuthContainerFooter from "../../views/components/AuthContainerFooter/AuthContainerFooter";
import { SIGN_UP_URL } from "../../constants/navigation";
import useLoginForm from "../../hooks/useLoginForm";

const LoginForm = () => {
  const { loginError } = useSelector((state) => state.users);

  const [inputValue, formErrors, handleChange, handleSubmit] = useLoginForm();

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <LoginFormHolder>
        {loginError && <ErrorAlert label={loginError} />}
        <Input
          label="Your email address"
          type="email"
          name="email"
          onChange={handleChange}
          error={formErrors["email"]}
          defaultValue={inputValue["email"]}
          data-testid="email"
          required
        />
        <br />
        <Input
          label="Your password"
          type="password"
          name="password"
          onChange={handleChange}
          error={formErrors["password"]}
          defaultValue={inputValue["password"]}
          data-testid="password"
          required
        />
      </LoginFormHolder>
      <AuthContainerFooter
        to={SIGN_UP_URL}
        linkName="Sign Up"
        buttonName="Login"
      />
    </Form>
  );
};

export default LoginForm;

const LoginFormHolder = styled.div`
  padding: 40px;
`;
