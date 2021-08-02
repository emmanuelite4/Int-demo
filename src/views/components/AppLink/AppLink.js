import { css } from "@emotion/css";
import { Link } from "react-router-dom";

const AppLink = ({ label, to }) => {
  return (
    <Link
      className={css`
        ${CSS_LINK}
      `}
      to={to}
    >
      {label}
    </Link>
  );
};

export default AppLink;

const CSS_LINK = css`
  color: var(--primary-color-one);
  text-decoration: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
`;
