import { Paper } from "@material-ui/core";
import React from "react";
import Moment from "react-moment";
// import { withStyles } from '@material-ui/styles';
import "../../css/task.css";

const Task = (props) => {
  // const { classes } = props;
  return (
    <Paper className="root">
      <div className="header">
        <div className="title">{props.title}</div>
        <div className="tags">
          <div className="urgent">{props.isUrgent ? "URGENT" : ""}</div>
          <div className="category">{/* {props.category} */}</div>
        </div>
      </div>
      <div className="due">
        Due: <Moment format="DD-MMM-YYYY">{props.due}</Moment>
      </div>
      <div className="patient">{props.patient}</div>
      <div className="description">{props.description}</div>
    </Paper>
  );
};

export default Task;
//export default withStyles(styles)(Task)
