import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useContext } from "react";

import chsLogo from "../../assets/chsLogo.png";
import AuthContext from "../../store/auth-context";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  const classes = useStyles();

  const SignoutButtonHandler = () => {
    authCtx.logout();
  };

  const TaskButtonHandler = (e) => {
    // console.log("Tasks");
    history.push({
      pathname: "/tasklist",
    });
  };

  const DocsButtonHandler = (e) => {
    history.push({
      pathname: "/hack",
    });
  };
  const WarningsButtonHandler = (e) => {
    history.push({
      pathname: "/patientwarning",
    });
  };
  const NewTaskButtonHandler = (e) => {
    history.push({
      pathname: "/newtask",
    });
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box display={{ xs: "none", sm: "block", md: "block", lg: "block" }}>
            <img src={chsLogo} alt="CHS GP" width="128px" />
          </Box>
          <Typography variant="h6" className={classes.title}>
            {/* CHS GP */}
          </Typography>

          <Button color="inherit" onClick={DocsButtonHandler}>
            Docs
          </Button>

          <Button color="inherit" onClick={NewTaskButtonHandler}>
            New Task
          </Button>
          <Button color="inherit" onClick={TaskButtonHandler}>
            Tasks
          </Button>
          <Button color="inherit" onClick={WarningsButtonHandler}>
            Warnings
          </Button>
          <Button color="inherit" onClick={SignoutButtonHandler}>
            Sign out
          </Button>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Header;
