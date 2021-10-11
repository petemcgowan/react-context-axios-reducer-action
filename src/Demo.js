import React, { useEffect } from "react";
import { useUser } from "./contexts/User/UserState";
import { getUser, setLoading } from "./contexts/User/UserAction";
import "./style.css";

const Demo = () => {
  // const [userState, userDispatch] = useUser();
  const { userState, userDispatch } = useContext(UserContext);
  const { user, loading, error, message } = userState;

  // get user info handler
  const getUserInfoHandler = async () => {
    await getUser(userDispatch);
    setLoading(userDispatch, false);
  };

  // get user info
  useEffect(() => {
    getUserInfoHandler();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{message}</p>}
      <p>User name: {user.name}</p>
    </div>
  );
};

export default Demo;
