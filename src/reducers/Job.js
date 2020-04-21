import { GET_JOBS, GET_JOBS_SUCCESS } from "../actionTypes";

const INITIAL_STATE = {
  jobs: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_JOBS_SUCCESS:
      return {
        ...state,
        jobs: action.payload,
      };
    default:
      return state;
  }
};
