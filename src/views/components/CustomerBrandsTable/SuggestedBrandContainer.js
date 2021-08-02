import styled from "@emotion/styled";
import { CSS_CARD } from "../../style/shared";
import TableTitle from "../Table/TableTitle";
import SuggestTable from "./TableItems/SuggestTable";

const SuggestedBrandContainer = ({ data, onFollow }) => {
  return (
    <TableHolder>
      <TableTitle>Suggested Brand</TableTitle>
      <SuggestTable data={data} onFollow={onFollow} />
    </TableHolder>
  );
};

export default SuggestedBrandContainer;

const TableHolder = styled.div`
  ${CSS_CARD}
`;
