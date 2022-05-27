import axios from "axios";

export const requestAddToWishlist = async (
  userId: string,
  productId: string
) => {
  try {
    await axios.post(
      `https://localhost:7271/api/user/favorite/${userId}/${productId}`
    );
  } catch (e) {
    throw e;
  }
};

export const requestWishlist = async (userId: string) => {
  try {
    const response = await axios.get(
      `https://localhost:7271/api/user/favorite/${userId}`
    );
    return response.data;
  } catch (e) {
    throw e;
  }
};
