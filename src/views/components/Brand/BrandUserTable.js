import styled from "@emotion/styled";
import { css } from "@emotion/react";
import TableBodyItem from "../Table/TableBodyItem";
import TableHeadItem from "../Table/TableHeadItem";
import StyledLine from "../StyledLine/StyledLine";
import {
  CSS_TABLE_CONTAINER_PADDING,
  CSS_TABLE_ITEM_CONTAINER,
} from "../../style/shared";

function BrandUserTable({ data, followsId, onSelectUser }) {
  return (
    <div>
      <HeadlineContainer>
        <TableHeadItem>#</TableHeadItem>
        <TableHeadItem>First Name</TableHeadItem>
        <TableHeadItem>Last Name</TableHeadItem>
        <TableHeadItem>Current Point</TableHeadItem>
        <TableHeadItem>Select</TableHeadItem>
      </HeadlineContainer>
      <StyledLine />
      {data.map((user, index) => {
        return (
          <BrandItems
            index={index + 1}
            onSelectUser={onSelectUser}
            key={user.id}
            followsId={followsId}
            {...user}
          />
        );
      })}
    </div>
  );
}

export default BrandUserTable;

function BrandItems({
  index,
  firstName,
  lastName,
  point,
  onSelectUser,
  followsId,
  id,
}) {
  return (
    <ItemContainer>
      <TableBodyItem>{index}</TableBodyItem>
      <TableBodyItem>{firstName}</TableBodyItem>
      <TableBodyItem>{lastName}</TableBodyItem>
      <TableBodyItem>{point}</TableBodyItem>
      <TableBodyItem>
        <input
          type="checkbox"
          value={id || ""}
          checked={followsId.filter((uid) => uid === id).length > 0}
          onChange={onSelectUser}
        />
      </TableBodyItem>
    </ItemContainer>
  );
}

const CSS_GRID_COLUMNS = css`
  grid-template-columns: 40px 200px 200px 130px 100px;
`;

const HeadlineContainer = styled.div`
  display: grid;
  ${CSS_GRID_COLUMNS};
  ${CSS_TABLE_CONTAINER_PADDING};
  width: 100%;
`;

const ItemContainer = styled.div`
  ${CSS_GRID_COLUMNS};
  ${CSS_TABLE_CONTAINER_PADDING};
  ${CSS_TABLE_ITEM_CONTAINER}
`;
