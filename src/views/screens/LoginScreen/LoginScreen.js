import styled from "@emotion/styled";
import { CSS_AUTH_ROOT_CONTAINER } from "../../style/shared";
import Login from "../../components/Login/Login";

function LoginScreen() {
  return (
    <LoginHolder>
      <Login />
    </LoginHolder>
  );
}

export default LoginScreen;

const LoginHolder = styled.div`
  ${CSS_AUTH_ROOT_CONTAINER}
`;
