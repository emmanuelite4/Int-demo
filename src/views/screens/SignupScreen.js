import SignUp from "../components/SignUp/SignUp";
import styled from "@emotion/styled";
import { CSS_AUTH_ROOT_CONTAINER } from "../style/shared";

const SignupScreen = () => {
  return (
    <SignUpContainer>
      <SignUp />
    </SignUpContainer>
  );
};

export default SignupScreen;

const SignUpContainer = styled.div`
  ${CSS_AUTH_ROOT_CONTAINER}
`;
