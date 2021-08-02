import { css } from "@emotion/css";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Button from "../../components/Button";
import Card from "../../components/Card/Card";
import Input from "../../components/Input/Input";
import { selectCustomerFollowedBrand } from "../../../application/followBrand/followBrand.selector";
import useFollowForm from "./hook/useFollowForm";
import Form from "../../components/Form";
import PointCard from "../../components/PointCard/PointCard";

function FollowBrandScreen() {
  const { id } = useParams();
  const brandData = useSelector((state) =>
    selectCustomerFollowedBrand(state, id)
  );

  const { point, brand } = brandData;
  const { name, symbol, logoUrl } = brand;

  const [error, value, onChange, onSubmit] = useFollowForm();

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
        <PointCard point={point} label="Earned Point" />
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
            <Form onSubmit={onSubmit} noValidate>
              <div
                className={css`
                  width: 400px;
                  margin-bottom: 20px;
                `}
              >
                <Input
                  label="Please enter amount"
                  onChange={onChange}
                  required
                  value={value}
                  readOnly={point === 0}
                  type="number"
                  error={error}
                />
              </div>
              <div
                className={css`
                  text-align: center;
                `}
              >
                <Button
                  label="Redeem reward"
                  disabled={point === 0 || error || value === 0 || !value}
                  type="submit"
                />
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default FollowBrandScreen;
