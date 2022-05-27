import axios from "axios";

export const requestCart = async (id: string) => {
  try {
    const response = await axios.get(
      `https://localhost:7271/api/user/cart/${id}`
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};

export const requestAddToCart = async (id: string, productId: string) => {
  try {
    await axios.post(`https://localhost:7271/api/cart/add/${id}/${productId}`);
  } catch (e) {
    throw e;
  }
};

export const requestReservation = async (id: string) => {
  try {
    await axios.post(`https://localhost:7271/api/cart/reservation/${id}/`);
  } catch (e) {
    throw e;
  }
};
