import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
	title: {
		fontWeight: "600 !important",
		paddingTop: 10,
	},
	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		borderRadius: "5px",
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
