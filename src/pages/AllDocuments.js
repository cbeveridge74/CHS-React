import { makeStyles, Typography } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
  },
}));

function AllDocuments() {
  const classes = useStyles();
  return (
    <>
      {localStorage.getItem("filename") == null ? (
        <Typography>No correspondence</Typography>
      ) : (
        <Paper className={classes.root}>
          <Typography>{localStorage.getItem("filename")}</Typography>
        </Paper>
      )}
    </>
  );
}
export default AllDocuments;

{
  /* <Paper className={classes.root}>
      <Typography>
        {localStorage.getItem("filename") || "No correspondence"}
      </Typography>
    </Paper> */
}
