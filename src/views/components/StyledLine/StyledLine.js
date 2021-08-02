import styled from "@emotion/styled";

const StyledLine = () => {
  return <StyledLineContainer />;
};

export default StyledLine;

const StyledLineContainer = styled.div`
  background-image: linear-gradient(
    to right,
    var(--primary-color-one),
    var(--primary-color-two)
  );
  width: 100%;
  height: 2px;
`;
