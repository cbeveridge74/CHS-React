import { useEffect, useContext, useState } from "react";
// import { useHistory } from 'react-router-dom';
import AuthContext from "../store/auth-context";
import AppContext from "../store/app-context";
import TaskList from "../components/Tasks/TaskList";

/*
Dependencies: 
  1. user token stored in authCtx from AuthContext
  2. URL to be passed in, currently hard wired.
  3. User id, 'receiptent'? used to get tasks for said user
  4. State, altough not clear from the docs what the different versions are
*/

function AllTasksPage() {
  // const params = useParams(); // Not using at mo
  // console.log(params.userId);
  // const history = useHistory()

  const [tasks, setTasks] = useState([]);
  // const URL = "";
  const URL = "https://community1.inps.co.uk";

  const authCtx = useContext(AuthContext);
  // console.log("Authctx from AllTasksPage", authCtx);
  const appCtx = useContext(AppContext);
  const user = appCtx.userId;
  useEffect(() => {
    fetch(URL + "/v1/workflow/tasks?recipient=" + user + "&state=NEW", {
      method: "GET",
      headers: {
        Authorization: "vision_connection token=" + authCtx.token,
        "Content-Type": "application/json",
        "X-Business-TransactionId": "123123",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log("data in useEffect in AllTasksPage", data.error);
        if (data.error) {
          if (data.error.category === "INVALID_SESSION") {
            console.log("Invalid token", data.error.category);
            console.log("Need to delete the localstorage session here");
          } else {
            console.log("ADD THROW HERE, AppTasksPage");
          }
        } else {
          console.log("No error getting tasks in AllTasksPage");
          setTasks(data.tasks);
        }
      })
      .catch((e) => {
        console.log("Error from AllTasksPage", e);
      });
  }, [authCtx.token]);

  return (
    // <section>
    <TaskList tasksList={tasks} />
    // </section>
  );
}

export default AllTasksPage;
