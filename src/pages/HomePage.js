import { useContext, useState } from "react";
import AuthContext from "../store/auth-context";
import AppContext from "../store/app-context";
import { Fragment } from "react";
import UserDetails from "../components/Users/UserDetails"

const HomePage = () => {
  const authCtx = useContext(AuthContext);
  const appCtx = useContext(AppContext);
  const user = appCtx.userId;
  // const userToken = useState()

  console.log("HomePage authCtx", authCtx);
  console.log("HomePage appthCtx", appCtx);
  console.log("This is user", user);

  return (
    <Fragment>
      {!authCtx.token && <div>User not logged in</div>}
      {authCtx.token && <UserDetails></UserDetails>}
      
    </Fragment>
  );
};

export default HomePage;
