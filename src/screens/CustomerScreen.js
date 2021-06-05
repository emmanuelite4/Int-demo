import { css } from "@emotion/css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import Card from "../components/Card";
import { addCustomerToBrand } from "../redux/followBrand/followBrand.slice";
import {
  selectCurrentCustomerBrands,
  selectCurrentUser,
  selectCustomerEarnedPoint,
  selectCustomerUnfollowedBrands,
} from "../redux/user/user.selector";

function CustomerScreen() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => selectCurrentUser(state));
  const followedbrands = useSelector((state) =>
    selectCurrentCustomerBrands(state)
  );

  const totalPoints = useSelector((state) => selectCustomerEarnedPoint(state));

  const unfollowedBrands = useSelector((state) =>
    selectCustomerUnfollowedBrands(state)
  );

  const handleAddCustomerToBrand = (id) => () => {
    const params = { userId: user.id, brandId: id };
    dispatch(addCustomerToBrand(params));
  };

  useEffect(() => {}, []);
  return (
    <div>
      <div
        className={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          column-gap: 30px;
          margin-bottom: 30px;
        `}
      >
        <Card>
          <div
            className={css`
              text-align: center;
              padding: 30px;
            `}
          >
            <h1
              className={css`
                margin: 0px;
                color: var(--primary-color-one);
                margin: 0 0 10px;
              `}
            >
              {totalPoints}
            </h1>
            <h5
              className={css`
                color: var(--black-color);
                margin: 0;
              `}
            >
              Total Points
            </h5>
          </div>
        </Card>
        <Card>
          <div
            className={css`
              padding: 30px;
              text-align: center;
            `}
          >
            <h1
              className={css`
                margin: 0px;
                color: var(--primary-color-one);
                margin: 0 0 10px;
              `}
            >
              {followedbrands.length}
            </h1>
            <h5
              className={css`
                color: var(--black-color);
                margin: 0;
              `}
            >
              Followed Brand
            </h5>
          </div>
        </Card>
      </div>
      <Card>
        <div
          className={css`
            padding: 10px 20px;
          `}
        >
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
                    text-align: left;
                  }
                `}
              >
                <th>#</th>
                <th>Brand Logo</th>
                <th>Brand Name</th>
                <th>Point(s)</th>
              </tr>
            </thead>
            <tbody>
              {followedbrands.map((row, index) => {
                const { id, brand, point } = row;
                const { name, logoUrl } = brand;
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
                      }
                    `}
                    onClick={() => history.push(`/followed-brand/${id}`)}
                  >
                    <td>{index + 1}</td>
                    <td>
                      <div
                        className={css`
                          background: url(${logoUrl});
                          background-size: cover;
                          width: 40px;
                          height: 40px;
                        `}
                      ></div>
                    </td>
                    <td>{name}</td>
                    <td>{point}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <div
        className={css`
          margin-top: 30px;
        `}
      >
        <Card>
          <div
            className={css`
              padding: 10px 20px;
            `}
          >
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
                      text-align: left;
                    }
                  `}
                >
                  <th>#</th>
                  <th>Brand Logo</th>
                  <th>Brand Name</th>
                  <th>Follow</th>
                </tr>
              </thead>
              <tbody>
                {unfollowedBrands.map((brand, index) => {
                  const { id, name, logoUrl } = brand;
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
                        }
                      `}
                    >
                      <td>{index + 1}</td>
                      <td>
                        <div
                          className={css`
                            background: url(${logoUrl});
                            background-size: cover;
                            width: 40px;
                            height: 40px;
                          `}
                        ></div>
                      </td>
                      <td>{name}</td>
                      <td>
                        <button
                          className={css`
                            cursor: pointer;
                            border: none;
                            font-weight: 600;
                            background-color: #00a0e3;
                            padding: 8px 20px;
                            height: 35px;
                            box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
                            color: rgb(255, 255, 255);
                            border-radius: 5px;
                            font-size: 14px;
                            line-height: 19px;
                            transition: all 0.3s ease 0s;
                            outline: none;
                            &:disabled {
                              background-color: #ccf0ff;
                              box-shadow: none;
                            }
                          `}
                          onClick={handleAddCustomerToBrand(id)}
                        >
                          Follow
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CustomerScreen;
