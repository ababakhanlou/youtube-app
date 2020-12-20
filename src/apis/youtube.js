import axios from "axios";

const KEY = "AIzaSyBHrmgIhc_983JruQGPsTDdIumNnTA-u1A";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 10,
    key: KEY,
  },
});
