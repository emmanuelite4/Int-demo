import { useDispatch, useSelector } from "react-redux";
import { addCustomerToBrand } from "../store/entities/followBrand/followBrand.slice";

import {
  selectCurrentUser,
  selectCustomerUnfollowedBrands,
} from "../store/entities/user/user.selector";

function useSuggestedBrand() {
  const dispatch = useDispatch();
  const user = useSelector((state) => selectCurrentUser(state));
  const data = useSelector((state) => selectCustomerUnfollowedBrands(state));

  const onAddCustomerToBrand = (id) => () => {
    const params = { userId: user.id, brandId: id };
    dispatch(addCustomerToBrand(params));
  };

  return [data, onAddCustomerToBrand];
}

export default useSuggestedBrand;
