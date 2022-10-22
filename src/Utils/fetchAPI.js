import axios from "axios";
import { API_DATA } from "../static/config";

export const fetchAPIData = async (payload) => {
  const { path, id } = payload;
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "X-Requested-With": "XMLHttpRequest",
  };
  // TODO(raghav.wahi): Remove URL Prefix before build
  let url = `http://192.168.29.31:5000/${API_DATA.url}${path}/`;

  if (id) {
    url += id;
  }
  const res = await axios.get(url, { headers });
  const data = res.data;

  return data;
};
