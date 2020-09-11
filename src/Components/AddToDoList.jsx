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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import todolist2 from "../asset/svg/todolist2.svg";
import axios from "axios";
export class AddToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        description: "",
      },
      toDo: [],
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      data: {
        ...this.state.data,
        description: e.target.value,
      },
    });
    console.log(this.state.data.description);
  };
  clearData() {
    this.setState({
      data: {
        ...this.state.data,
        description: "",
      },
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/api/add", this.state.data).then((res) => {
      this.setState({
        ...this.state,
        status: res.status,
      });

      console.log(res);
      // console.log(this.state.data);
      let toDo = [...this.state.toDo];
      toDo.push(this.state.data);
      // setting back the state will trigger a rerender and will show the changes on screen
      this.setState({ toDo });
      this.clearData();
    });
  };
  handleDelete = (id) => {
    axios.delete("http://localhost:8080/api/add/" + id).then((res) => {
      this.setState({
        // toDo,
        // toDo: res.data.data,
      });
    });
  };
  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClickClose = () => {
    this.setState({
      open: false,
    });
  };
  componentDidMount() {
    axios.get("http://localhost:8080/api/add", this.state.toDo).then((res) => {
      this.setState({
        toDo: res.data.data,
      });
      // console.log(res);
    });
  }
  render() {
    const { classes } = this.props;
    const { toDo } = this.state;
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
                name="description"
                value={this.state.data.description}
                onChange={this.handleChange}
                endAdornment={
                  <InputAdornment>
                    <Button
                      onClick={this.handleSubmit}
                      style={{ backgroundColor: "#4169E1", color: "white" }}
                    >
                      ADD
                    </Button>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Grid>
          <TableContainer>
            <Table className={classes.EditPaper}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">
                    <b>Sl No</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Description</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Edit</b>
                  </TableCell>
                  <TableCell align="center">
                    <b>Delete</b>
                  </TableCell>
                </TableRow>
              </TableHead>
              {toDo.map((item, idx) => (
                <TableBody>
                  <TableRow>
                    <TableCell align="center">{idx + 1}</TableCell>
                    <TableCell align="center">{item.description}</TableCell>
                    <TableCell align="center">
                      <Button
                        style={{ backgroundColor: "#4169E1", color: "white" }}
                        onClick={this.handleClickOpen}
                      >
                        Edit
                      </Button>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        style={{ backgroundColor: "#4169E1", color: "white" }}
                        onClick={() => this.handleDelete(item.add_id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                    {/* {console.log(item.add_id)} */}
                  </TableRow>
                </TableBody>
              ))}
            </Table>
          </TableContainer>
          {/* <Dialog open={this.state.open} onClose={this.handleClose}>
                      <DialogTitle id="alert-dialog-title">
                        <b> Edit ToDo List</b>
                      </DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                          Update Your Changes here
                        </DialogContentText>
                        <TableContainer>
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell align="center">
                                  <b>Sl No</b>
                                </TableCell>
                                <TableCell align="left">
                                  <b> Description</b>
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                <TableCell align="center">1</TableCell>
                                <TableCell align="center">
                                  Brush Teeth regularly before you go to bed
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </DialogContent>

                      <Grid item xs={12} className={classes.DialogBox}>
                        <DialogActions>
                          <Grid>
                            <Button
                              onClick={this.handleClickClose}
                              style={{
                                backgroundColor: "#4169E1",
                                color: "white",
                              }}
                              className={classes.DialogBoxEdit}
                            >
                              Edit
                            </Button>
                          </Grid>
                          <Grid>
                            <Button
                              onClick={this.handleClickClose}
                              style={{
                                backgroundColor: "#4169E1",
                                color: "white",
                              }}
                              className={classes.DialogBoxClose}
                            >
                              Close
                            </Button>
                          </Grid>
                        </DialogActions>
                      </Grid>
                    </Dialog> */}
        </CssBaseline>
      </center>
    );
  }
}

export default withStyles(styles)(AddToDoList);
