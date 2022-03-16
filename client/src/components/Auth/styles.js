import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  paper: {
    marginTop: 10,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
  },
  root: {
    "& .MuiTextField-root": {
      margin: 10,
    },
  },
  avatar: {
    margin: 10,
    backgroundColor: "#2074d4 !important",
  },
  form: {
    width: "100%",
    marginTop: 30,
  },
  submit: {
    margin: "10px 0 !important",
    background: "#2074d4 !important",
    color: "#fff !important",
    border: "1px solid grey !important",
    "&:hover": {
      background: "#195ead !important",
      border: "1px solid #5C5C5C !important",
    },
  },
  mainContainer: {
    marginTop: 100,
  },
}));
