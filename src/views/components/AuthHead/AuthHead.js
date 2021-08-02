import styled from "@emotion/styled";
import StyledLine from "../StyledLine/StyledLine";
import { TextBig } from "../../../components/Text/Text";

const AuthHead = (props) => {
  return (
    <div>
      <Container>
        <TextBig>{props.children}</TextBig>
      </Container>
      <StyledLine />
    </div>
  );
};

export default AuthHead;

const Container = styled.div`
  padding: 40px 40px 20px;
`;
