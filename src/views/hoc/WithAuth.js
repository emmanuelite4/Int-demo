import useAuth from "../hooks/useAuth";

const WithAuth = (props) => useAuth() && props.children;

export default WithAuth;
