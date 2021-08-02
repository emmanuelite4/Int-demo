import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectBrandByUserId,
  selectBrandFollower,
  selectTotalBrandFollowerPoint,
} from "../store/entities/brand/brand.selector";
import { awardFollowerPoints } from "../store/entities/followBrand/followBrand.slice";
import { selectCurrentUser } from "../store/entities/user/user.selector";

const useBrand = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => selectCurrentUser(state));

  const currentBrand = useSelector((state) =>
    selectBrandByUserId(state, currentUser.id)
  );

  const { id, maxPoints } = currentBrand;

  const totalFollowerPoint = useSelector((state) =>
    selectTotalBrandFollowerPoint(state, id)
  );
  const currentPointSum = maxPoints - totalFollowerPoint;

  const [followsId, setFollowsId] = useState([]);
  const [rewardPoint, setRewardPoint] = useState(0);

  const followersData = useSelector((state) => selectBrandFollower(state, id));

  const data = followersData.map((follower) => {
    const { id, point, user } = follower;
    const { firstName, lastName } = user;

    return { id, firstName, lastName, point };
  });

  const onSelectUser = ({ target }) => {
    let id = target.value;
    let userExist = followsId.findIndex((uid) => uid === id);

    if (userExist > -1) {
      setFollowsId((prev) => prev.splice(userExist, 1));
    } else {
      setFollowsId((prev) => [...prev, id]);
    }
    // eslint-disable-next-line
  };

  const onRewardPointChange = ({ target: { value } }) => {
    let len = followsId.length;
    console.log(value);
    console.log(len);
    if (value <= Math.floor(currentPointSum / followsId.length)) {
      setRewardPoint(value);
    }
    // eslint-disable-next-line
  };

  const onAddPoint = (e) => {
    e.preventDefault();
    let object = { brandId: id, point: rewardPoint, followsId };
    console.log(object);
    dispatch(awardFollowerPoints(object));
    // eslint-disable-next-line
  };

  return [
    currentBrand,
    currentPointSum,
    data,
    followsId,
    rewardPoint,
    onAddPoint,
    onRewardPointChange,
    onSelectUser,
  ];
};

export default useBrand;
