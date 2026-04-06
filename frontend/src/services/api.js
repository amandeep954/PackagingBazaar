import axios from "axios";

// Axios instance with Base URL
const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const fetchProducts = async (params) => {
  try {
    // params mein page, limit, category, sort, search sab pass honge
    const response = await API.get("/products", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
export const fetchProductById = async (id) => {
  try {
    const response = await API.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching product details:", error);
    throw error;
  }
};

export const fetchTopSelling = async () => {
    try {
        const response = await API.get('/products/top-selling');
        return response.data;
    } catch (error) {
        console.error("Error fetching top selling:", error);
        throw error;
    }
};
