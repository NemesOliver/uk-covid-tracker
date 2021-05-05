import covidApi from "../api/covidApi";
import { FETCH_TOTAL } from "./types";

export const fetchTotal = () => async (dispatch) => {
  const { data } = await covidApi.get("/total", {
    params: {
      iso: "GBR",
    },
  });
  dispatch({ type: FETCH_TOTAL, payload: data.data });
};
