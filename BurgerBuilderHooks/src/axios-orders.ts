import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-3b4f9.firebaseio.com/",
});

export default instance;
