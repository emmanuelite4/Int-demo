import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import followedBrands from "../../infastructure/followedBrands";
import { v4 as uuidv4 } from "uuid";

export const followAdapter = createEntityAdapter();
const enptyInitialState = followAdapter.getInitialState({
  brands: followedBrands,
});
const filledInitailState = followAdapter.upsertMany(
  enptyInitialState,
  followedBrands
);

const followBrand = createSlice({
  name: "followBrand",
  // initialState,
  initialState: filledInitailState,
  reducers: {
    addCustomerToBrand: {
      reducer(state, action) {
        followAdapter.addOne(state, action.payload);
      },
      prepare(payload) {
        const { brandId, userId } = payload;
        return {
          payload: {
            id: uuidv4(),
            brandId,
            userId,
            point: 0,
          },
        };
      },
    },
    redeemPoints(state, action) {
      let { id, point } = action.payload;
      console.log(action.payload);
      followAdapter.updateOne(state, {
        id: id,
        changes: { point: state.entities[id].point - parseInt(point) },
      });
    },
    awardFollowerPoints(state, action) {
      let { point, followsId = [] } = action.payload;
      let idsToUUpdate = followsId.map((id) => ({
        id: id,
        changes: { point: state.entities[id].point + parseInt(point) },
      }));

      followAdapter.updateMany(state, idsToUUpdate);
    },
  },
});

export const { addCustomerToBrand, redeemPoints, awardFollowerPoints } =
  followBrand.actions;

export default followBrand.reducer;
