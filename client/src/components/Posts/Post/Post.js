import React from "react";
import useStyles from "./styles";
import { Card, CardActions, Button, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost, likePost, dislikePost } from "../../../actions/posts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

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
          <ThumbUpAltIcon />
          &nbsp;{post.likes.length}
        </>
      ) : (
        <>
          <ThumbUpOffAltIcon />
          &nbsp;{post.likes.length}
        </>
      );
    }

    return (
      <>
        <ThumbUpOffAltIcon />
      </>
    );
  };

  const Dislikes = () => {
    if (post.dislikes && post.dislikes.length > 0) {
      return post.dislikes.find((dislike) => dislike === user?.result?._id) ? (
        <>
          <ThumbDownAltIcon />
          &nbsp;{post.dislikes.length}
        </>
      ) : (
        <>
          <ThumbDownOffAltIcon />
          &nbsp;{post.dislikes.length}
        </>
      );
    }

    return (
      <>
        <ThumbDownOffAltIcon />
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
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(dislikePost(post._id))}
          >
            <Dislikes />
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
