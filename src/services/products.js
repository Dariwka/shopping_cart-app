import axios from "axios";

const baseUrl = "http://localhost:3002";

export const getProducts = async () => {
  const response = await axios.get(baseUrl + "/products");
  return response.data;
};
export const addProduct = async () => {
  const response = await axios.post(baseUrl + "/cart");
  return response.data;
};

export const getCart = async () => {
  const response = await axios.get(baseUrl + "/cart");
  return response.data;
};
