import axios from "axios";

const randomApi = axios.create({
  baseURL: `random-api/changeMeLater`,
});

export { randomApi };
