import styled from "@emotion/styled";
import { CSS_CARD, CSS_CONTAINER_PADDING } from "../../style/shared";
import TableTitle from "../Table/TableTitle";
import AwardUserForm from "./AwardUserForm";
import BrandUserTable from "./BrandUserTable";
import MaxRewardObserver from "./MaxRewardObserver";

function BrandUser({
  currentPointSum,
  data,
  followsId,
  rewardPoint,
  onAddPoint,
  onRewardPointChange,
  onSelectUser,
}) {
  return (
    <Holder>
      <TableTitle>Reward User</TableTitle>
      <Wrapper>
        <MaxRewardObserver
          currentPointSum={currentPointSum}
          followsLen={followsId.length}
        />
        <AwardUserForm
          currentPointSum={currentPointSum}
          rewardPoint={rewardPoint}
          onAddPoint={onAddPoint}
          followsLen={followsId.length}
          onRewardPointChange={onRewardPointChange}
        />
      </Wrapper>
      <TableTitle>Please select users</TableTitle>
      <BrandUserTable
        currentPointSum={currentPointSum}
        data={data}
        onSelectUser={onSelectUser}
        onAddPoint={onAddPoint}
        followsId={followsId}
        rewardPoint={rewardPoint}
        onRewardPointChange={onRewardPointChange}
      />
    </Holder>
  );
}

export default BrandUser;

const Holder = styled.div`
  ${CSS_CARD}
`;

const Wrapper = styled.div`
  ${CSS_CONTAINER_PADDING}
`;
