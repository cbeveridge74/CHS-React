import React from "react";
import { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepContent from "@material-ui/core/StepContent";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Entities } from "./EntityUtil";
import Entity from "./Entity";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "90vh",
    overflow: "auto",
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

export default function DocumentCentre(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState([]);

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

  useEffect(() => {
    console.log(props.model);
    var steps = [];
    Object.entries(props.model)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .map(([key, value]) => {
        console.log(key);
        steps.push(key);
      });
    setSteps(steps);
    return () => {
      //cleanup
    };
  }, []);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    handleCancel();
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    handleCancel();
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {Object.entries(props.model)
          .sort((a, b) => a[0].localeCompare(b[0]))
          .map(([key, value], index) => (
            <Step key={key} active={true}>
              <StepLabel>{Entities[key].label}</StepLabel>
              <StepContent>
                <Entity entity={value} />
                {index === steps.length - 1 && (
                  <div className={classes.actionsContainer}>
                    <div>
                      <Button
                        // disabled={activeStep === 0}
                        onClick={handleBack}
                        className={classes.button}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        className={classes.button}
                      >
                        {index === steps.length - 1 ? "Finish" : "Next"}
                      </Button>
                    </div>
                  </div>
                )}
              </StepContent>
            </Step>
          ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
