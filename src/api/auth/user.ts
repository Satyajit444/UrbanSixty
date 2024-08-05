import axios from "axios";
import { SignInCredentials, SignUpCredentials } from "@/types";

export const userRegister = async (
  data: SignUpCredentials
): Promise<{ id?: string; success: boolean; message?: string }> => {
  try {
    const response = await axios.post(process.env.USERS_API as string, data);
    return { id: response.data.id, success: true };
  } catch (error: any) {
    console.error("User register error--------", error);
    return {
      success: false,
      message: error.message,
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
  } catch (error: any) {
    console.error("User register error--------", error);
    return { success: false, message: error?.message };
  }
};
