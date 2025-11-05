import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import RadioGroup from "@material-ui/core/RadioGroup";
import MKButton from "../Medkit/MKButton";
import MKCard from "../Medkit/MKCard";
import MKCardActions from "../Medkit/MKCardActions";
import MKCardHeader from "../Medkit/MKCardHeader";
import MKCardContent from "../Medkit/MKCardContent";
import MKRadio from "../Medkit/MKRadio";
import FeedbackIcon from "../../assets/FeedbackIcon.js";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MKFormControlLabel from "../Medkit/MKFormControlLabel";
import MKTextField from "../Medkit/MKTextField";
import { Typography } from "@material-ui/core";

// Create a general header template for reuse
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function MKPatientWarning(props) {
  const classes = useStyles();
  const [warningType, setWarningType] = useState("none");
  const [message, setMessage] = useState("");
  const [edit, isEdit] = useState(true);
  const [dirty, isDirty] = useState(false);
  const [discreet, isDiscreet] = useState(true);
  // Added by TT to remove the warning, as classes not being used
  console.log("This is classes in MKPatientWarning", classes);
  return (
    <MKCard className="mk-patient-warning" {...props} elevation={4}>
      <MKCardHeader
        titleTypographyProps={{ variant: "body1" }}
        title={
          <div>
            <FeedbackIcon color="secondary" className="mk-display-inline" />
            <div className="mk-display-inline">Patient warning</div>
          </div>
        }
      />
      {props.children}
      <MKCardContent>
        <Grid container spacing={4} justify="center" alignItems="center">
          {edit === false ? (
            <Grid item xl={10} xs={10}>
              <Typography>{message}</Typography>
            </Grid>
          ) : null}
          {discreet !== true ? (
            <>
              <Grid item xs={10}>
                <InputLabel id="demo-simple-select-label">
                  Select warning type
                </InputLabel>
                <RadioGroup
                  aria-label="warning type"
                  name="warningType"
                  onChange={(e) => setWarningType(e.target.value)}
                  value={warningType}
                  row
                >
                  <MKFormControlLabel
                    value="none"
                    control={<MKRadio />}
                    label="No warning"
                  />
                  <MKFormControlLabel
                    value="nondiscreet"
                    control={<MKRadio />}
                    label="Non-discreet"
                  />
                  <MKFormControlLabel
                    value="discreet"
                    control={<MKRadio />}
                    label="Discreet"
                  />
                </RadioGroup>
              </Grid>
              <Grid item xl={10} xs={10}>
                <InputLabel
                  id="demo-simple-select-label"
                  color="primary"
                  disabled={warningType === "none"}
                >
                  Enter warning text
                </InputLabel>
                <MKTextField
                  id="standard-textarea"
                  placeholder="Type warning text here..."
                  variant="outlined"
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    isDirty(true);
                  }}
                  multiline={true}
                  rows={4}
                  disabled={warningType === "none"}
                  required
                />
              </Grid>
            </>
          ) : (
            <Grid item xl={10} xs={10}>
              <Typography align="center" variant="h5">
                This patient has a discreet warning
              </Typography>
              <Typography align="center" variant="body2">
                This warning may contain sensitive information about the patient
              </Typography>
            </Grid>
          )}
        </Grid>
      </MKCardContent>
      <MKCardActions>
        {discreet ? (
          <MKButton
            color="primary"
            variant="contained"
            onClick={(e) => isDiscreet(!discreet)}
          >
            Show warning
          </MKButton>
        ) : (
          <MKButton
            color="primary"
            variant="contained"
            onClick={(e) => isEdit(!edit)}
            disabled={
              (message === null || message.length < 1) && dirty === false
            }
          >
            {edit === true ? "Save" : "Edit"}
          </MKButton>
        )}
        <MKButton color="secondary">Cancel</MKButton>
      </MKCardActions>
    </MKCard>
  );
}
export default MKPatientWarning;
