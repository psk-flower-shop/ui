import axios from "axios";
import { User } from "context/user/userTypes";

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`https://localhost:7271/api/login/user`, {
      params: { token: id },
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const requestLogin = async (user: User) => {
  try {
    const response = await axios.post(
      "https://localhost:7271/api/login/check",
      user,
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
