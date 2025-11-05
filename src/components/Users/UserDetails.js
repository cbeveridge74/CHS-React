import classes from "./UserDetails.module.css";
import { useContext } from "react";

import AuthContext, { AuthContextProvider } from "../../store/auth-context";
import AppContext from "../../store/app-context";

// import { makeStyles } from "@material-ui/core/styles";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import MKButton from "../Medkit/MKButton";
import MKCard from "../Medkit/MKCard";
// import MKCardActions from "../Medkit/MKCardActions";
import MKCardHeader from "../Medkit/MKCardHeader";
import MKCardContent from "../Medkit/MKCardContent";
// import MKRadio from "../Medkit/MKRadio";
// import FeedbackIcon from "../../assets/FeedbackIcon.js";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
// import MKFormControlLabel from "../Medkit/MKFormControlLabel";
// import MKTextField from "../Medkit/MKTextField";
import { Typography } from "@material-ui/core";

// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//   }));

function UserDetails(props) {
  const authCtx = useContext(AuthContext);
  const appCtx = useContext(AppContext);
  //   const classes = useStyles();
  return (
    <MKCard className="mk-patient-warning" {...props} elevation={4}>
      <MKCardHeader
        titleTypographyProps={{ variant: "body1" }}
        title={
          <div>
            {/* Was causing warnings in console */}
            {/* <FeedbackIcon color="secondary" className="mk-display-inline" /> */}
            <div className="mk-display-inline">User Details</div>
          </div>
        }
      />
      <MKCardContent>
        <Grid container spacing={4} justify="center" alignItems="center">
          <Grid item xl={10} xs={10}>
            {/* <Typography align="left" variant="h5">
              Details 
            </Typography> */}
            <Typography align="left" variant="body2">
              Basic user details
            </Typography>
            <InputLabel id="demo-simple-select-label">
              Token {authCtx.token}
            </InputLabel>
            <InputLabel id="demo-simple-select-label">
              User ID: {appCtx.userId}
            </InputLabel>
          </Grid>
        </Grid>
      </MKCardContent>
    </MKCard>
  );
}

export default UserDetails;
