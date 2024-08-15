import axios from "axios";
import {
  DecodedToken,
  SignInCredentials,
  SignUpCredentials,
  User,
} from "@/types";
import { jwtDecode } from "jwt-decode";

export const userRegister = async (
  data: SignUpCredentials
): Promise<{ id?: string; success: boolean; message?: string }> => {
  try {
    const response = await axios.post(process.env.USERS_API as string, data);
    return { id: response.data.id, success: true };
  } catch (error) {
    console.error("User register error--------", error);
    return {
      success: false,
      message: (error as Error)?.message,
    };
  }
};

export const userSignin = async (
  data: SignInCredentials
): Promise<{ token?: string; success: boolean; message?: string }> => {
  try {
    const response = await axios.post(
      process.env.USER_SIGN_UP_API as string,
      data
    );
    return { token: response.data.token, success: true };
  } catch (error) {
    console.error("User register error--------", error);
    return { success: false, message: (error as Error)?.message };
  }
};

export const getUserProfile = async (
  id: number
): Promise<{ data?: User; success: boolean; message?: string }> => {
  try {
    const response = await axios.get(
      `${process.env.USER_BY_ID_API as string}${id}`
    );
    return { data: response.data, success: true };
  } catch (error) {
    console.error("User register error--------", error);
    return { success: false, message: (error as Error)?.message };
  }
};

export const authenticate = async (): Promise<boolean> => {
  const authToken = localStorage.getItem("authToken");
  const username = localStorage.getItem("username");

  if (authToken && username) {
    const decoded = jwtDecode<DecodedToken>(authToken);
    return username === decoded?.user;
  } else {
    return false;
  }
};
