import { useContext, useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import moment from "moment";
import MomentUtils from "@date-io/moment";

import CardContent from "@material-ui/core/CardContent";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import TextField from "@material-ui/core/TextField";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import MKFormControlLabel from "../Medkit/MKFormControlLabel";
import MKCard from "../Medkit/MKCard";
import MKCardActions from "../Medkit/MKCardActions";
import MKButton from "../Medkit/MKButton";
import MKCheckbox from "../Medkit/MKCheckbox";
import MKRadio from "../Medkit/MKRadio";
import MKTextField from "../Medkit/MKTextField";
import Grid from "@material-ui/core/Grid";

import { saveTask } from "../../services/TaskServices";

const NewTask = (props) => {
  const URL = "https://community1.inps.co.uk/";
  const history = useHistory();
  const authCtx = useContext(AuthContext);
  const [category, setCategory] = useState("clinical");
  // need to investigate further how to use useRef from the check box type so we not using ref and state for form data entry
  const [priority, setPriority] = useState("routine");
  const [selectedDate, setSelectedDate] = useState(
    moment().add("+1", "w").format("DD-MMM-YYYY")
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleCancel = (event) => {
    if (window.chrome.webview != null) {
      window.chrome.webview.postMessage("CANCEL");
      /* window.chrome.webview.addEventListener('message', event => {
              console.log( event.data );
              if (event.data === 'message') {
                // process message
              }
            });*/
    } 
  };

  const subjectInputRef = useRef();

  const notesInputRef = useRef();

  const onAdd = async () => {
    const enteredSubject = subjectInputRef.current.value;
    // const enteredNotes = notesInputRef.current.value;

    console.log("onAdd called", authCtx.token);
    await saveTask(URL, authCtx.token, enteredSubject, priority);
    history.push({
      pathname: "/tasklist",
    });
  };

  return (
    <MKCard elevation={3}>
      <CardContent>
        <form noValidate autoComplete="off">
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Recipients</InputLabel>
              <TextField id="recipients" defaultValue="Dr Richard Linden" />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Subject</InputLabel>
              <TextField
                id="subject"
                autoFocus
                required
                inputRef={subjectInputRef}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value={"clinical"}>Clinical</MenuItem>
                <MenuItem value={"admin"}>Administrative</MenuItem>
                <MenuItem value={"appointment"}>Appointment</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Due date</InputLabel>
              <MuiPickersUtilsProvider utils={MomentUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="DD-MMM-YYYY"
                  margin="normal"
                  id="datetime"
                  onChange={handleDateChange}
                  value={selectedDate}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </MuiPickersUtilsProvider>
              {/* <MKTextField
                id="datetime"
                type="datetime"
                defaultValue={date}
                InputLabelProps={{
                  shrink: true,
                }}
                
                ></MKTextField> */}
            </Grid>
            <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label" color="primary">
                Notes
              </InputLabel>
              <MKTextField
                id="standard-textarea"
                placeholder="Placeholder"
                multiline
              />
            </Grid>
            <Grid item xs={12}>
              <RadioGroup
                aria-label="priority"
                name="priority"
                onChange={(e) => setPriority(e.target.value)}
                value={priority}
                >
                <MKFormControlLabel
                  value="routine"
                  control={<MKRadio />}
                  label="Routine"
                />
                <MKFormControlLabel
                  value="urgent"
                  control={<MKRadio />}
                  label="Urgent"
                />
                <MKFormControlLabel
                  value="urgent_when_overdue"
                  control={<MKRadio />}
                  label="Urgent when overdue"
                />
              </RadioGroup>
            </Grid>
            <Grid item xs={12}>
              <MKFormControlLabel
                control={<MKCheckbox name="sensitive" color="primary" />}
                label="Task contains sensitive information"
              />

              <MKFormControlLabel
                control={<MKCheckbox name="all" color="primary" />}
                label="All recipients must complete"
              />
            </Grid>
          </Grid>
        </form>
      </CardContent>
      <MKCardActions
        className="actions"
        confirmationtext="This is the confirmation text"
      >
        <MKButton
          size="small"
          variant="contained"
          color="primary"
          onClick={() => {
            onAdd();
          }}
        >
          Save
        </MKButton>
        <MKButton size="small" color="secondary" onClick={handleCancel}>
          Cancel
        </MKButton>
      </MKCardActions>
    </MKCard>
  );
};
export default NewTask;
//export default withStyles(styles)(NewTask)
