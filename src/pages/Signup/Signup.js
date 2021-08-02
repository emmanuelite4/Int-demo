import SignUp from "../Signup/Signup";
import styled from "@emotion/styled";
import { CSS_AUTH_ROOT_CONTAINER } from "../../views/style/shared";

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
