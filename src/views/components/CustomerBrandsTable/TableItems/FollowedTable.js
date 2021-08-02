import StyledLine from "../../StyledLine/StyledLine";
import TableBodyItem from "../../Table/TableBodyItem";
import TableHeadItem from "../../Table/TableHeadItem";
import { HeadlineContainer, ItemContainer, LogoItem } from "../shared/Brand";

function FollowedTable({ data, onGoToBrandPage }) {
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
        <FollowedBrandItems
          key={index}
          index={index + 1}
          onGoToBrandPage={onGoToBrandPage}
          {...item}
        />
      ))}
    </div>
  );
}

export default FollowedTable;

function FollowedBrandItems({
  id,
  index,
  logoUrl,
  name,
  point,
  onGoToBrandPage,
}) {
  return (
    <ItemContainer link onClick={onGoToBrandPage(id)}>
      <TableBodyItem>{index}</TableBodyItem>
      <TableBodyItem>
        <LogoItem logoUrl={logoUrl} />
      </TableBodyItem>
      <TableBodyItem>{name}</TableBodyItem>
      <TableBodyItem>{point}</TableBodyItem>
    </ItemContainer>
  );
}
