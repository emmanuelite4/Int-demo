import { createSelector } from "reselect";
import { selectAllBrands } from "../brand/brand.selector";
import { selectAllFollowBrand } from "../followBrand/followBrand.selector";

export const selectCurrentUser = (state) => state.users.currentUser;

export const selectCurrentCustomerFollows = createSelector(
  [selectCurrentUser, selectAllFollowBrand],
  (user, brands) => {
    const userId = user.id;
    return brands.filter((brand) => brand.userId === userId);
  }
);

export const selectCurrentCustomerBrands = createSelector(
  [selectCurrentCustomerFollows, selectAllBrands],
  (followedBrand, allBrands) => {
    return followedBrand.map((fb) => ({
      ...fb,
      brand: allBrands.filter((ab) => ab.id === fb.brandId)[0],
    }));
  }
);

export const selectCustomerUnfollowedBrands = createSelector(
  [selectCurrentCustomerFollows, selectAllBrands],
  (followedBrand, allBrands) => {
    return allBrands.filter((ab) => {
      if (followedBrand.find((fb) => fb.brandId === ab.id)) {
        return false;
      } else {
        return true;
      }
    });
  }
);

export const selectCustomerEarnedPoint = createSelector(
  [selectCurrentCustomerFollows],
  (brands) => {
    return brands.reduce((total, brand) => total + brand.point, 0);
  }
);
