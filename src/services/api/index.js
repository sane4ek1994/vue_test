import axios from 'axios';

const PRODUCTS_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
 return axios.get(PRODUCTS_URL);
}