import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginBottom: 10,
    },
  },
  paper: {
    padding: 20,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  buttonSubmit: {
    margin: "10px 0 !important",
    background: "#dc1a22 !important",
    color: "#fff !important",
    border: "1px solid grey !important",
    "&:hover": {
      background: "#B9171e !important",
      border: "1px solid #5C5C5C !important",
    },
  },
  buttonClear: {
    background: "#121212 !important",
    color: "#fff !important",
    border: "1px solid grey !important",
    "&:hover": {
      background: "#000 !important",
      border: "1px solid #5C5C5C !important",
    },
  },
  header: {
    marginBottom: "10px !important",
  },
}));
