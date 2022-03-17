import React from "react";
import useStyles from "./styles";
import { Card, CardActions, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost } from "../../../actions/posts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";

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

  const Likes = () => {
    if (post.likes && post.likes.length > 0) {
      return post.likes.find((like) => like === user?.result?._id) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;{post.likes.length}
        </>
      ) : (
        <>
          <ThumbUpOffAltIcon fontSize="small" />
          &nbsp;{post.likes.length}
        </>
      );
    }

    return (
      <>
        <ThumbUpOffAltIcon fontSize="small" />
      </>
    );
  };

  return (
    <Card className={classes.card} variant="outlined">
      <div className={classes.text}>
        <Typography variant="h6" className={classes.title}>
          {post.title}
        </Typography>
        <div className={classes.message}>
          <Typography variant="h8">{post.message}</Typography>
        </div>
        <Typography variant="h8" className={classes.time}>
          {moment(post.createdAt).fromNow()} by {post.name}
        </Typography>
      </div>
      <CardActions className={classes.cardActions}>
        <ThemeProvider theme={theme}>
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likePost(post._id))}
          >
            <Likes />
          </Button>
          {user?.result?._id === post?.author && (
            <>
              <Button
                size="small"
                color="primary"
                onClick={() => setCurrentId(post._id)}
              >
                <EditIcon fontSize="small" />
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => dispatch(deletePost(post._id))}
              >
                <DeleteIcon fontSize="small" />
              </Button>
            </>
          )}
        </ThemeProvider>
      </CardActions>
    </Card>
  );
};

export default Post;
