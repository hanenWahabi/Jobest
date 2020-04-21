import axios from "axios";
import { GET_JOBS, GET_JOBS_SUCCESS, GET_JOBS_FAILED } from "../actionTypes";

export const getJOBS = (keyword) => {
  return (dispatch) => {
    dispatch({ type: GET_JOBS });
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    const url = `https://jobs.github.com/positions.json?search=${keyword}`;
    axios
      .get(proxyurl + url, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        dispatch({ type: GET_JOBS_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: GET_JOBS_FAILED });
      });
  };
};
