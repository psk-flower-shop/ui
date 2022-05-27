import axios from "axios";
import { User } from "context/user/userTypes";

export const requestRegister = async (user: User) => {
  try {
    await axios.post(
      "https://localhost:7271/api/register/add",
      {},
      {
        headers: { "Access-Control-Allow-Origin": "*" },
        params: { email: user.email, password: user.password },
      }
    );
  } catch (error) {
    throw error;
  }
};
