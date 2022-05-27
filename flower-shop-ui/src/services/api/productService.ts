import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("https://localhost:7271/api/product", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductsByCategory = async (category: String) => {
  try {
    const response = await axios.get(
      `https://localhost:7271/api/product/findByCategory/${category}`,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
