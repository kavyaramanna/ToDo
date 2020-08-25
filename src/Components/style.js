const styles = (theme) => ({
  Heading: {
    marginTop: "4%",
    displayFlex: "row",
    width: "50%",
  },
  TypographyStyle: {
    fontSize: "30px",
    fontWeight: "bold",

    fontStyle: "Verdana,sans-serif",
  },
  InputLabel: {
    marginTop: "8%",
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing.unit * 10,
    },
  },
  FormControl: {
    [theme.breakpoints.up("md")]: {
      width: "90%",
      //   marginTop: theme.spacing.unit * 4,
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
    },
  },
  ToDoListImage: {
    width: "50%",
  },
  EditPaper: {
    marginTop: "3%",
    width: "50%",
  },
  DialogBox: {
    marginTop: "2%",
    marginBottom: "6%",
  },
  DialogAction: {
    marginBottom: "2%",
  },
  DialogBoxEdit: {
    marginLeft: "-30%",
  },
  DialogBoxClose: {
    marginLeft: "-12%",
  },
});
export default styles;
