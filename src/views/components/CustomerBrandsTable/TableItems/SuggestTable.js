import Button from "../../Button";
import StyledLine from "../../StyledLine/StyledLine";
import TableBodyItem from "../../Table/TableBodyItem";
import TableItem from "../../Table/TableBodyItem";
import TableHeadItem from "../../Table/TableHeadItem";
import {
  HeadlineContainer,
  Item,
  ItemContainer,
  LogoItem,
} from "../shared/Brand";

function SuggestTable({ data, onFollow }) {
  return (
    <div>
      <HeadlineContainer>
        <TableHeadItem>S/N</TableHeadItem>
        <TableHeadItem>Brand Logo</TableHeadItem>
        <TableHeadItem>Brand Name</TableHeadItem>
        <TableHeadItem>Point</TableHeadItem>
      </HeadlineContainer>
      <StyledLine />
      {data.map((item, index) => (
        <SuggestTableItems
          key={index}
          index={index + 1}
          onFollow={onFollow}
          brandID={item.id}
          {...item}
        />
      ))}
    </div>
  );
}

export default SuggestTable;

function SuggestTableItems({ index, brandID, logoUrl, name, onFollow }) {
  return (
    <ItemContainer>
      <TableBodyItem>{index}</TableBodyItem>
      <TableBodyItem>
        <LogoItem logoUrl={logoUrl} />
      </TableBodyItem>
      <TableBodyItem>{name}</TableBodyItem>
      <TableBodyItem>
        <Button onClick={onFollow(brandID)}>Follow</Button>
      </TableBodyItem>
    </ItemContainer>
  );
}
