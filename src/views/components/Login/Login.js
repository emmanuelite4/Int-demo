import styled from "@emotion/styled";
import { CSS_AUTH_FORM_CONTAINER } from "../../style/shared";
import AuthHead from "../AuthHead/AuthHead";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <LoginHolder>
      <AuthHead>Log in to your account</AuthHead>
      <LoginForm />
    </LoginHolder>
  );
};

export default Login;

const LoginHolder = styled.div`
  ${CSS_AUTH_FORM_CONTAINER}
`;
