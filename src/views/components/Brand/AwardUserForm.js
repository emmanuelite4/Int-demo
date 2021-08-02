import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import styled from "@emotion/styled";

const AwardUserForm = ({
  followsLen,
  rewardPoint,
  onAddPoint,
  onRewardPointChange,
}) => {
  return (
    <form onSubmit={onAddPoint}>
      <Input
        placeholder="Enter loyalty Point"
        type="number"
        onChange={onRewardPointChange}
        value={rewardPoint}
        min={0}
      />
      <ButtonWrapper>
        <Button
          type="submit"
          disabled={followsLen === 0 || !rewardPoint || rewardPoint === 0}
        >
          Reward
        </Button>
      </ButtonWrapper>
    </form>
  );
};

export default AwardUserForm;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 15px;
`;
