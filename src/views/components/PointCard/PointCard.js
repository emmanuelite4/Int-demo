import styled from "@emotion/styled";
import Card from "../../../components/Card/Card";
import { TextBig, TextBoldMid } from "../../../components/Text/Text";

const PointCard = ({ point, label }) => {
  return (
    <Card>
      <PointContainer>
        <TextBig>{point}</TextBig>
        <TextBoldMid>{label}</TextBoldMid>
      </PointContainer>
    </Card>
  );
};

export default PointCard;

const PointContainer = styled.div`
  padding: 30px;
  text-align: center;
`;
