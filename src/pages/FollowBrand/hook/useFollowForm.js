import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectCustomerFollowedBrand } from "../../../store/entities/followBrand/followBrand.selector";
import { redeemPoints } from "../../../store/entities/followBrand/followBrand.slice";

function useFollowForm() {
  const { id } = useParams();
  const brandData = useSelector((state) =>
    selectCustomerFollowedBrand(state, id)
  );

  const { point } = brandData;

  const dispatch = useDispatch();
  const [value, setValue] = useState(0);
  const [error, setError] = useState("");

  const onChange = ({ target }) => {
    setValue(target.value);
    if (parseInt(target.value) > point) {
      setError(`Value cannot be greater than ${point}`);
      return;
    } else {
      setError("");
    }
  };

  const onSubmit = (e) => {
    const object = { point: value, id: id };

    dispatch(redeemPoints(object));
    setValue(0);
    setError("");
  };

  return [error, value, onChange, onSubmit];
}

export default useFollowForm;
