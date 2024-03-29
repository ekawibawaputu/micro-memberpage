import axios from "./index";

export default (token = null) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else if (!token) {
    axios.defaults.headers.common["Authorization"] = `Bearer${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }

  // if (token) axios.defaults.headers.common.authorization = `Bearer ${token}`;
  // else delete axios.defaults.headers.common.authorization;
};
