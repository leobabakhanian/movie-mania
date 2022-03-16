export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...posts, action.payload];

    case "UPDATE":
      return posts.map((task) =>
        task._id === action.payload._id ? action.payload : task
      );

    case "DELETE":
      return posts.filter((task) => task._id !== action.payload);

    default:
      return posts;
  }
};
