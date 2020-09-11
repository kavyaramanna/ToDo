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
import axios from "axios";
export class EditToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: {},
      open: false,
    };
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
  componentDidMount() {
    axios.get("http://localhost:8080/api/add", this.state.toDo).then((res) => {
      console.log(res);
    });
  }
  render() {
    const { classes } = this.props;
    const { toDo } = this.state;
    return <center></center>;
  }
}

export default withStyles(styles)(EditToDoList);
