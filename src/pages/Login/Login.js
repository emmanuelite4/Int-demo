import styled from "@emotion/styled";
import { CSS_AUTH_ROOT_CONTAINER } from "../../views/style/shared";
import Login from "../../features/Login/Login";

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
