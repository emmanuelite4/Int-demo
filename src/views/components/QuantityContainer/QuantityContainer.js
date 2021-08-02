import styled from "@emotion/styled";
import PointCard from "../PointCard/PointCard";

function QuantityContainer({
  firstPoint,
  firstLabel,
  secondPoint,
  secondLabel,
}) {
  return (
    <Holder>
      <PointCard point={firstPoint} label={firstLabel} />
      <PointCard point={secondPoint} label={secondLabel} />
    </Holder>
  );
}

export default QuantityContainer;

const Holder = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 30px;
  margin-bottom: 30px;
`;
