import axios from "axios";

export default axios.create({
  baseURL: "https://covid-api.com/api/reports",
});
