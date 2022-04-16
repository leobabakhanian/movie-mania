import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch } from "react-redux";
import { createPost, updatePost } from "../../actions/posts";
import { useSelector } from "react-redux";

const Form = ({ currentId, setCurrentId }) => {
  //Model
  const [postData, setPostData] = useState({
    title: "",
    message: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.find((message) => message._id === currentId) : null
  );
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [name, setName] = useState();

  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  //Controller
  const clear = () => {
    setCurrentId(0);
    setPostData({
      title: "",
      message: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentId) {
      dispatch(createPost({ ...postData, name: user?.result?.username }));
      clear();
    } else {
      dispatch(
        updatePost(currentId, { ...postData, name: user?.result?.username })
      );
      clear();
    }
  };

  if (!user?.result?.username) {
    return (
      <Paper className={classes.paper} variant="outlined">
        <Typography variant="h6" align="center">
          Please sign in to post a message.
        </Typography>
      </Paper>
    );
  }

  //Form view
  return (
    <Paper className={classes.paper} variant="outlined">
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography className={classes.header} variant="h6">
          {currentId ? `Editing "${post.title}"` : "Post a Message 🍿"}
        </Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => {
            setName(e.target.value);
            setPostData({ ...postData, title: e.target.value });
          }}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          value={postData.message}
          onChange={(e) => {
            setName(e.target.value);
            setPostData({ ...postData, message: e.target.value });
          }}
        />
        <Button
          className={classes.buttonSubmit}
          variant="outlined"
          color="secondary"
          size="large"
          type="submit"
          fullWidth
          disabled={!name}
        >
          Submit
        </Button>
        <Button
          className={classes.buttonClear}
          variant="outlined"
          color="primary"
          size="large"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
