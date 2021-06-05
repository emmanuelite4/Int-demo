import { css } from "@emotion/css";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import Input from "../components/Input/Input";
import {
  selectBrandByUserId,
  selectBrandFollower,
  selectTotalBrandFollowerPoint,
} from "../redux/brand/brand.selector";
import { selectCurrentUser } from "../redux/user/user.selector";
import { awardFollowerPoints } from "../redux/followBrand/followBrand.slice";
import Button from "../components/Button";

function callUsersMaxReward(quantity, total) {
  if (total === 0) {
    return quantity;
  }
  return Math.floor(quantity / total);
}

function BrandDashboardScreen() {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => selectCurrentUser(state));

  const currentBrand = useSelector((state) =>
    selectBrandByUserId(state, currentUser.id)
  );
  const { name, id, logoUrl, symbol, maxPoints } = currentBrand;

  const followers = useSelector((state) => selectBrandFollower(state, id));

  const totalFollowerPoint = useSelector((state) =>
    selectTotalBrandFollowerPoint(state, id)
  );

  const currentPointSum = maxPoints - totalFollowerPoint;

  const [rewardPoint, setRewardPoint] = useState(0);
  const [followsId, setFollowsId] = useState([]);
  const [inputError, setInputError] = useState("");

  const handleRewardPointChange = useCallback(
    ({ target }) => {
      setRewardPoint(target.value);
      let maxPoint = callUsersMaxReward(currentPointSum, followsId.length);
      if (target.value > maxPoint) {
        setInputError(`Value cannot be greater than ${maxPoint}`);
        return;
      } else {
        setInputError("");
      }
      // eslint-disable-next-line
    },
    [currentPointSum, followsId]
  );

  const handleSetUserId = useCallback(
    ({ target }) => {
      let id = target.value;
      let userExist = followsId.findIndex((uid) => uid === id);

      if (userExist > -1) {
        setFollowsId((prev) => prev.filter((uid) => uid !== id));
      } else {
        setFollowsId((prev) => [...prev, id]);
      }
      // eslint-disable-next-line
    },
    [followsId]
  );

  const handleAddPoint = useCallback(
    (e) => {
      e.preventDefault();
      if (inputError) {
        return;
      }
      let object = { brandId: id, point: rewardPoint, followsId };
      dispatch(awardFollowerPoints(object));
      setRewardPoint(0);
      // eslint-disable-next-line
    },
    [rewardPoint, followsId]
  );

  return (
    <div>
      <Card>
        <div
          className={css`
            padding: 30px;
            display: flex;
            flex-direction: column;
            align-items: center;
          `}
        >
          <img
            src={logoUrl}
            alt={name}
            className={css`
              width: 80px;
            `}
          />
          <h3
            className={css`
              color: var(--primary-color-one);
            `}
          >
            {name}
          </h3>
          <p
            className={css`
              margin: 0px;
            `}
          >
            {symbol}
          </p>
        </div>
      </Card>
      <div
        className={css`
          margin: 20px 0px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        `}
      >
        <Card>
          <div
            className={css`
              padding: 30px;
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <h1
              className={css`
                margin: 0px;
                color: var(--primary-color-one);
              `}
            >
              {currentPointSum}
            </h1>
            <h5
              className={css`
                color: var(--black-color);
              `}
            >
              Available Point
            </h5>
          </div>
        </Card>
        <Card>
          <div
            className={css`
              padding: 30px;
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <h1
              className={css`
                margin: 0px;
                color: var(--primary-color-two);
              `}
            >
              {maxPoints}
            </h1>
            <h5
              className={css`
                color: var(--black-color);
              `}
            >
              Max Loyalty Points
            </h5>
          </div>
        </Card>
      </div>
      <Card>
        <div
          className={css`
            padding: 9px 15px;
            border-bottom: 1px solid rgb(204, 204, 204);
          `}
        >
          <p
            className={css`
              font-size: 16px;
              color: rgb(45, 45, 45);
              font-weight: 600;
              margin: 0;
            `}
          >
            Select and Reward user point
          </p>
        </div>
        <div
          className={css`
            padding: 30px;
          `}
        >
          <form onSubmit={handleAddPoint} noValidate>
            <Input
              placeholder="Enter loyalty Point"
              type="number"
              onChange={handleRewardPointChange}
              value={rewardPoint}
              error={inputError}
            />
            <div
              className={css`
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: 20px;
              `}
            >
              <p>
                Max Reward for {followsId.length} follower is{" "}
                {callUsersMaxReward(currentPointSum, followsId.length)}
              </p>
              <Button
                label="Reward"
                type="submit"
                disabled={
                  followsId.length === 0 ||
                  !rewardPoint ||
                  rewardPoint === 0 ||
                  inputError
                }
              />
            </div>
          </form>
          <table
            className={css`
              width: 100%;
              border-collapse: collapse;
            `}
          >
            <thead>
              <tr
                className={css`
                  th {
                    height: 50px;
                    text-align: center;
                  }
                `}
              >
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Current Point</th>
                <th>Select</th>
              </tr>
            </thead>
            <tbody>
              {followers.map((follower, index) => {
                const { id, point, user } = follower;
                const { firstName, lastName } = user;
                return (
                  <tr
                    key={id}
                    className={css`
                      cursor: pointer;
                      &:hover {
                        background-color: #f5f5f5;
                      }
                      td {
                        height: 52px;
                        text-align: center;
                      }
                    `}
                  >
                    <td>{index + 1}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{point}</td>
                    <td>
                      <input
                        type="checkbox"
                        value={id || ""}
                        checked={
                          followsId.filter((uid) => uid === id).length > 0
                        }
                        onChange={handleSetUserId}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

export default BrandDashboardScreen;
