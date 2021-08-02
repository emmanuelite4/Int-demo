import { selectAllBrands } from "../brand/brand.selector";
import { followAdapter } from "./followBrand.slice";

export const { selectAll: selectAllFollowBrand } = followAdapter.getSelectors(
  (state) => state.followBrands
);

export const selectCustomerFollowedBrand = (state, documentID) => {
  let allFollowBrands = selectAllFollowBrand(state);
  let followedBrandData = allFollowBrands.find((fb) => fb.id === documentID);

  let brand = selectAllBrands(state).find(
    (brand) => brand.id === followedBrandData.brandId
  );
  return { ...followedBrandData, brand: brand };
};
