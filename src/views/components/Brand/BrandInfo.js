import styled from "@emotion/styled";
import { COLOR_PRIMARY_ONE } from "../../contants/style";
import { CSS_CARD } from "../../style/shared";
import { TextMid, TextVeryBig } from "../Text/Text";

const BrandInfo = ({ logoUrl, name, symbol }) => {
  return (
    <RootContainer>
      <Logo src={logoUrl} alt={name} />
      <TextVeryBig color={COLOR_PRIMARY_ONE}>{name}</TextVeryBig>

      <TextMid>{symbol}</TextMid>
    </RootContainer>
  );
};

export default BrandInfo;

const RootContainer = styled.div`
  ${CSS_CARD}
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 80px;
`;
