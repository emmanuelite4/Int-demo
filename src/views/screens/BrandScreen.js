import QuantityContainer from "../components/QuantityContainer/QuantityContainer";
import BrandUser from "../components/Brand/BrandUser";
import useBrand from "../hooks/useBrand";
import BrandInfo from "../components/Brand/BrandInfo";

function BrandDashboardScreen() {
  const [
    currentBrand,
    currentPointSum,
    data,
    followsId,
    rewardPoint,
    onAddPoint,
    onRewardPointChange,
    onSelectUser,
  ] = useBrand();

  const { name, logoUrl, symbol, maxPoints } = currentBrand;

  return (
    <div>
      <BrandInfo logoUrl={logoUrl} name={name} symbol={symbol} />

      <QuantityContainer
        firstLabel="Available Point"
        firstPoint={currentPointSum}
        secondLabel="Max Loyalty Points"
        secondPoint={maxPoints}
      />

      <BrandUser
        currentPointSum={currentPointSum}
        data={data}
        followsId={followsId}
        rewardPoint={rewardPoint}
        onAddPoint={onAddPoint}
        onRewardPointChange={onRewardPointChange}
        onSelectUser={onSelectUser}
      />
    </div>
  );
}

export default BrandDashboardScreen;
