import styled from "@emotion/styled";
import { CSS_AUTH_FORM_CONTAINER } from "../../style/shared";
import AuthHead from "../AuthHead/AuthHead";
import SignupForm from "./SignUpForm";

const SignUp = () => {
  return (
    <SignUpHolder>
      <AuthHead>Create your account</AuthHead>
      <SignupForm />
    </SignUpHolder>
  );
};

export default SignUp;

const SignUpHolder = styled.div`
  ${CSS_AUTH_FORM_CONTAINER}
`;
