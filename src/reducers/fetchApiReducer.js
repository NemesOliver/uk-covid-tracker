import { FETCH_TOTAL } from "../actions/types";

const fetchTotalReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_TOTAL:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default fetchTotalReducer;
