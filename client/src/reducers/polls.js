export default (polls = [], action) => {
  switch (action.type) {
    case "FETCH_POLLS":
      return action.payload;

    case "POLL":
      return polls.map((poll) =>
        poll._id === action.payload._id ? action.payload : poll
      );

    default:
      return polls;
  }
};
