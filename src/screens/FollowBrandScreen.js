import { css } from "@emotion/css";
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input/Input";
import { selectCustomerFollowedBrand } from "../redux/followBrand/followBrand.selector";
import { redeemPoints } from "../redux/followBrand/followBrand.slice";

function FollowBrandScreen() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [pointValue, setPointValue] = useState(0);
  const [inputError, setInputError] = useState("");
  const brandData = useSelector((state) =>
    selectCustomerFollowedBrand(state, id)
  );

  const { point, brand } = brandData;
  const { name, symbol, logoUrl } = brand;

  const handlePointValue = useCallback(({ target }) => {
    setPointValue(target.value);
    if (parseInt(target.value) > point) {
      setInputError(`Value cannot be greater than ${point}`);
      return;
    } else {
      setInputError("");
    }
  }, []);

  const handleRedeemPoint = useCallback(
    (e) => {
      e.preventDefault();

      const object = { point: pointValue, id: id };
      dispatch(redeemPoints(object));
      setPointValue(0);
      setInputError("");
    },
    [pointValue]
  );

  return (
    <div>
      <Card>
        <div
          className={css`
            padding: 30px;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <img
              src={logoUrl}
              alt={name}
              className={css`
                width: 90px;
                height: 90px;
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
                margin: 0;
              `}
            >
              {symbol}
            </p>
          </div>
        </div>
      </Card>
      <div
        className={css`
          margin-top: 20px;
        `}
      >
        <Card>
          <div
            className={css`
              padding: 30px;
              text-align: center;
            `}
          >
            <h2
              className={css`
                color: var(--primary-color-two);
                margin: 0;
              `}
            >
              {point}
            </h2>
            <h5
              className={css`
                color: var(--black-color);
              `}
            >
              Earned point{" "}
            </h5>
          </div>
        </Card>
      </div>
      <div
        className={css`
          margin-top: 20px;
        `}
      >
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
              Redeem your loyalty point
            </p>
          </div>
          <div
            className={css`
              padding: 30px;
              display: flex;
              flex-direction: column;
              align-items: center;
            `}
          >
            <form onSubmit={handleRedeemPoint} noValidate>
              <div
                className={css`
                  width: 400px;
                  margin-bottom: 20px;
                `}
              >
                <Input
                  label="Please enter amount"
                  onChange={handlePointValue}
                  required
                  value={pointValue}
                  readOnly={point === 0}
                  type="number"
                  error={inputError}
                />
              </div>
              <div
                className={css`
                  text-align: center;
                `}
              >
                <Button
                  label="Redeem reward"
                  disabled={
                    point === 0 || inputError || pointValue === 0 || !pointValue
                  }
                  type="submit"
                />
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FollowBrandScreen;
