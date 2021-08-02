import { useSelector } from "react-redux";
import { selectCustomerEarnedPoint } from "../../store/entities/user/user.selector";
import useCustomerBrand from "../../hooks/useCustomerBrand";
import FollowedBrandsContainer from "../../views/components/CustomerBrandsTable/FollowedBrandsContainer";
import SuggestedBrandContainer from "../../views/components/CustomerBrandsTable/SuggestedBrandContainer";
import useSuggestedBrand from "../../hooks/useSuggestedBrand";
import QuantityContainer from "../../views/components/QuantityContainer/QuantityContainer";

function CustomerScreen() {
  const [data, length, onGoToBrandPage] = useCustomerBrand();
  const [SUGGESTED__DATA, onAddCustomerToBrand] = useSuggestedBrand();

  const totalPoints = useSelector((state) => selectCustomerEarnedPoint(state));

  return (
    <div>
      <QuantityContainer
        firstLabel="Total Point"
        firstPoint={totalPoints}
        secondLabel="Followed Brand"
        secondPoint={length}
      />
      <FollowedBrandsContainer data={data} onGoToBrandPage={onGoToBrandPage} />
      <div className="customer-screen-suggested-brand">
        <SuggestedBrandContainer
          data={SUGGESTED__DATA}
          onFollow={onAddCustomerToBrand}
        />
      </div>
    </div>
  );
}

export default CustomerScreen;
