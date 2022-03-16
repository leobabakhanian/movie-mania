import * as api from "../api";

export const getPolls = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPolls();
    dispatch({ type: "FETCH_POLLS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const votePoll = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  try {
    const { data } = await api.votePoll(id, user?.token);
    dispatch({ type: "VOTE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
