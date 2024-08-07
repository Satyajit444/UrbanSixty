import axios, { AxiosResponse } from "axios";
import { Product } from "@/types";

export const getAllProduct = async (): Promise<{
  data?: Product[];
  success: boolean;
  message?: string;
}> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get(
      process.env.PRODUCTS_API as string
    );
    return { data: response.data, success: true };
  } catch (error) {
    console.error("All product error--------", error);
    return {
      success: false,
      message: (error as Error).message,
    };
  }
};
