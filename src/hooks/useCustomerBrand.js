import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCurrentCustomerBrands } from "../store/entities/user/user.selector";
import { FOLLOWED_BRAND_URL } from "../constants/navigation";

const useCustomerBrand = () => {
  const history = useHistory();
  const followedbrands = useSelector((state) =>
    selectCurrentCustomerBrands(state)
  );

  const length = followedbrands.length;

  const data = followedbrands.map((row) => {
    const { id, brand, point } = row;
    const { name, logoUrl } = brand;

    return { id, logoUrl, name, point };
  });

  const onGoToBrandPage = (id) => () => {
    history.push(`${FOLLOWED_BRAND_URL}/${id}`);
  };
  return [data, length, onGoToBrandPage];
};

export default useCustomerBrand;
