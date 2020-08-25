import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import styles from "./style";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
export class EditToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
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
  render() {
    const { classes } = this.props;
    return (
      <center>
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
            <TableBody>
              <TableRow>
                <TableCell align="center">1</TableCell>
                <TableCell align="center">dfghjkl</TableCell>
                <TableCell align="center">
                  <Button
                    style={{ backgroundColor: "#4169E1", color: "white" }}
                    onClick={this.handleClickOpen}
                  >
                    Edit
                  </Button>
                  <Dialog open={this.state.open} onClose={this.handleClose}>
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
                  </Dialog>
                </TableCell>
                <TableCell align="center">
                  <Button
                    style={{ backgroundColor: "#4169E1", color: "white" }}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </center>
    );
  }
}

export default withStyles(styles)(EditToDoList);
