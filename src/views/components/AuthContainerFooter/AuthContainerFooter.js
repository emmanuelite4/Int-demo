import styled from "@emotion/styled";
import AppLink from "../../../components/AppLink/AppLink";
import Button from "../../../components/Button/Button";

const AuthContainerFooter = ({
  to,
  linkName,
  buttonName,
  handleButtonClick,
  buttonDisabled,
}) => {
  return (
    <FooterContent>
      <AppLink to={to} label={linkName} />
      <Button onClick={handleButtonClick} disabled={buttonDisabled}>
        {buttonName}
      </Button>
    </FooterContent>
  );
};

export default AuthContainerFooter;

const FooterContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px 40px;
`;
