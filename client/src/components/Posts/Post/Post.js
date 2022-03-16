import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../../actions/posts";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const theme = createTheme({
    palette: {
      primary: {
        main: "#dc1a22",
      },
    },
  });

  return (
    <Card className={classes.card} variant="outlined">
      <div className={classes.text}>
        <Typography variant="h6" className={classes.title}>
          {post.name}
        </Typography>
        <div className={classes.message}>
          <Typography variant="h8">{post.message}</Typography>
        </div>
        <Typography variant="h8" className={classes.time}>
          {moment(post.createdAt).fromNow()} by {post.name}
        </Typography>
      </div>
      <CardActions className={classes.cardActions}>
        {user?.result?._id === post?.author && (
          <>
            <ThemeProvider theme={theme}>
              <Button
                size="small"
                color="primary"
                onClick={() => dispatch(deletePost(post._id))}
              >
                <DeleteIcon fontSize="small" />
              </Button>
            </ThemeProvider>
          </>
        )}
      </CardActions>
    </Card>
  );
};

export default Post;
