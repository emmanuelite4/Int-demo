function formValidator(values) {
  let errors = {};

  Object.keys(values).forEach((key, i) => {
    if (values[key].length === 0) {
      Object.assign(errors, { [key]: "This field is required" });
    } else {
      Object.assign(errors, { [key]: "" });
      if (
        key === "email" &&
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
          values[key]
        ) === false
      ) {
        Object.assign(errors, { [key]: "Invalid Email" });
      }
    }
  });

  let isValid =
    Object.values(errors).filter((val) => val.length === 0).length ===
    Object.keys(values).length;

  return { isValid, errors };
}

export default formValidator;
