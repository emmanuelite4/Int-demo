import styled from "@emotion/styled";
import { COLOR_PRIMARY_TWO } from "../../contants/style";
import { TextSmall } from "../Text/Text";

const MaxRewardObserver = ({ currentPointSum, followsLen }) => {
  return (
    <RewardStatusHolder>
      <RewardStatus followsLen={followsLen} />
      <MaxReward quantity={currentPointSum} total={followsLen} />
    </RewardStatusHolder>
  );
};

export default MaxRewardObserver;

const RewardStatus = ({ followsLen }) => {
  return (
    <TextSmall color={COLOR_PRIMARY_TWO}>
      Max Reward for {followsLen} follower is
    </TextSmall>
  );
};

function MaxReward({ quantity, total }) {
  return (
    <TextSmall color={COLOR_PRIMARY_TWO}>
      {total === 0 ? quantity : Math.floor(quantity / total)}
    </TextSmall>
  );
}

const RewardStatusHolder = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  & > p {
    margin: 0;
    margin-right: 4px;
  }
`;
