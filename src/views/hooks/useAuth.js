import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectCurrentUser } from "../../application/user/user.selector";

function useAuth() {
  const user = useSelector((state) => selectCurrentUser(state));
  const history = useHistory();
  useEffect(() => {
    if (!user) {
      return history.push("/login");
    }
    // eslint-disable-next-line
  }, [user]);
  return user;
}

export default useAuth;
