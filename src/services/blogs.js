import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

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

const update = async (id, newObject) => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const remove = (id) => {
  // const config = {
  //   headers: { Authorization: token },
  // };
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then((response) => response.data);
};

export default { getAll, setToken, create, update, remove };
