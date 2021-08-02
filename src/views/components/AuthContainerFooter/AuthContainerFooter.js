import styled from "@emotion/styled";
import AppLink from "../AppLink/AppLink";
import Button from "../Button";

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
