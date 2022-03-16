import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  title: {
    fontWeight: "600 !important",
    paddingTop: 10,
  },
  media: {
    height: "230px !important",
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {},
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "5px",
    height: "100%",
    position: "relative",
    background: "transparent",
  },
  paper: {
    width: 300,
    padding: 10,
  },
  list: {
    fontWeight: "600 !important",
    textAlign: "center",
  },
}));
