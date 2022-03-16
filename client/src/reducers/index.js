import { combineReducers } from "redux";
import posts from "./posts";
import auth from "./auth";
import polls from "./polls";

export default combineReducers({
  posts,
  auth,
  polls,
});
