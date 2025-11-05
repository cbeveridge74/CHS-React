//import classes from './Entity.module.css';
//import './Entity.module.css'
import { makeStyles } from "@material-ui/core/styles";
import { retrieveAttribute, buildTitleString } from "./EntityUtil";

import { Box, Grid, Typography, TextField } from "@material-ui/core";

const useStyles = makeStyles({
  bold: {
    fontWeight: 600,
  },
});

function Entity(props) {
  const classes = useStyles();
  return (
    <Box {...props}>
      {props.entity.map((entity, entIndex) => {
        return (
          <div
            className="container"
            onClick={(e) => {
              console.log(entity);
            }}
          >
            <Typography className={classes.bold}>
              {buildTitleString(entity)}
            </Typography>
            {entity.Attributes && (
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  {entity.Attributes.map((attribute, attIndex) => {
                    var ATTRIBUTE = retrieveAttribute(attribute.Type);
                    return (
                      <Grid container spacing={3}>
                        <Grid item xs={12}>
                          <TextField
                            variant="standard"
                            label={ATTRIBUTE.label}
                            id={ATTRIBUTE.id}
                            defaultValue={attribute.Text}
                          />
                        </Grid>
                      </Grid>
                    );
                    return;
                  })}
                </Grid>
              </Grid>
            )}
          </div>
        );
      })}
    </Box>
  );
}
export default Entity;
