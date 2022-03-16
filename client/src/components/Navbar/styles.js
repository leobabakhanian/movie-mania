import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    display: "flex !important",
    flexDirection: "row !important",
    justifyContent: "space-between !important",
    alignItems: "center",
    padding: "10px 50px",
  },
  heading: {
    color: "#2074d4",
    textDecoration: "none",
  },
  image: {
    marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "400px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
  },
  logout: {},
  avatar: {
    background: "#dc1a22",
  },
}));
