import { createSelector } from "reselect";
import { followAdapter } from "../followBrand/followBrand.slice";

export const selectAllBrands = (state) => state.brands.brands;

export const selectBrandByUserId = (state, userId) =>
  state.brands.brands.find((brand) => brand.userId === userId);

export const selectBrandFollower = (state, brandId) => {
  let { selectAll } = followAdapter.getSelectors((state) => state.followBrands);

  let followers = selectAll(state).filter((fb) => fb.brandId === brandId);

  return followers.map((follower) => ({
    ...follower,
    user: state.users.users.find((user) => user.id === follower.userId),
  }));
};

export const selectTotalBrandFollowerPoint = createSelector(
  [selectBrandFollower],
  (followers, brandId) => {
    return followers.reduce(
      (totalPoint, follower) => totalPoint + follower.point,
      0
    );
  }
);
