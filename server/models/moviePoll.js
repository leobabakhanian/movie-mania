import mongoose from "mongoose";

const pollSchema = mongoose.Schema({
  name: String,
  poll: {
    type: [String],
    default: [],
  },
});

var VotePoll = mongoose.model("movie-mania-poll", pollSchema);

export default VotePoll;
