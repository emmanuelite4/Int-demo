import styled from "@emotion/styled";
import { CSS_CARD } from "../../style/shared";
import TableTitle from "../Table/TableTitle";
import FollowedTable from "./TableItems/FollowedTable";

const CustomerBrandsTable = ({ data, onGoToBrandPage }) => {
  return (
    <TableHolder>
      <TableTitle>Followed Brand</TableTitle>
      <FollowedTable data={data} onGoToBrandPage={onGoToBrandPage} />
    </TableHolder>
  );
};

export default CustomerBrandsTable;

const TableHolder = styled.div`
  ${CSS_CARD}
`;
