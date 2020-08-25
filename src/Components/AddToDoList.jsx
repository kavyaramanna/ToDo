import React, { Component } from "react";
import Grid from "@material-ui/core/grid";
import styles from "./style";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import OutlinedInput from "@material-ui/core/OutlinedInput";

import InputAdornment from "@material-ui/core/InputAdornment";

import FormControl from "@material-ui/core/FormControl";
import todolist2 from "../asset/svg/todolist2.svg";
export class AddToDoList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <center>
        <CssBaseline>
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.Heading}
          >
            <Grid item xs={10} md={6}>
              <img src={todolist2} className={classes.ToDoListImage} />
            </Grid>
            <Grid item xs align="left">
              <Typography className={classes.TypographyStyle}>
                TODO LIST
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} className={classes.InputLabel}>
            <FormControl variant="outlined" className={classes.FormControl}>
              <OutlinedInput
                id="outlined-adornment-amount"
                endAdornment={
                  <InputAdornment>
                    <Button
                      style={{ backgroundColor: "#4169E1", color: "white" }}
                    >
                      ADD
                    </Button>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
        </CssBaseline>
      </center>
    );
  }
}

export default withStyles(styles)(AddToDoList);
