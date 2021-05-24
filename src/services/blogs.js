import axios from "axios";
const baseUrl = "/api/blogs";

const token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = async (params) => {
  const config = {
    headers: { Authorization: token },
  };
  const request = await axios.post(baseUrl, params, config);
  return request.data;
};

export default { getAll, setToken, create };
