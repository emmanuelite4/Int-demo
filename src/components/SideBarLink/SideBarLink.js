import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./styles.css";

function SideBarLink(props) {
  const { label, to, active } = props;
  return (
    <Link
      to={to}
      className={`side-bar-link${active ? " side-bar-link--active" : ""}`}
    >
      {label}
    </Link>
  );
}

SideBarLink.propTypes = {
  label: PropTypes.string,
  path: PropTypes.string,
};

export default SideBarLink;
