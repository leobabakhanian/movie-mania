import { makeStyles } from "@mui/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    overflowWrap: "break-word",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "7px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  text: {
    padding: "15px",
  },
  cardActions: {
    marginTop: -20,
    float: "right",
  },
  time: {
    color: "grey",
  },
  title: {
    fontWeight: "600 !important",
  },
  message: {
    marginTop: 5,
    marginBottom: 5,
  },
});
