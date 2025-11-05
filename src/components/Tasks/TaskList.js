import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import AppContext from "../../store/app-context";
import Task from "./Task";
import { Typography } from "@material-ui/core";

function TaskList(props) {
  const authCtx = useContext(AuthContext);
  const appCtx = useContext(AppContext);

  return (
    // <ul>
    <>
      {props.tasksList.length > 0 ? (
        props.tasksList.map((task) => (
          <Task
            key={task.id}
            title={task.subject}
            category={task.category}
            description={task.description}
            due={task.due_date}
            isUrgent={task.is_urgent}
          />
        ))
      ) : (
        <Typography>No tasks here....</Typography>
      )}
    </>
    // </ul>
  );
}

export default TaskList;
