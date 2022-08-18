import axios from "axios";

export function requestGetService() {
  return axios.request({
    method: "get",
    url: "https://admin.naxa.com.np/api/services",
  });
}
