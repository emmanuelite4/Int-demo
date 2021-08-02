import styled from "@emotion/styled";
import { CSS_TABLE_CONTAINER_PADDING } from "../../style/shared";
import { TextBoldMid } from "../Text/Text";

const TableTitle = ({ children }) => {
  return (
    <TitleHolder>
      <TextBoldMid>{children}</TextBoldMid>
    </TitleHolder>
  );
};

export default TableTitle;

const TitleHolder = styled.div`
  ${CSS_TABLE_CONTAINER_PADDING};
`;
