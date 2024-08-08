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

//
export const getProductById = async (
  id: string
): Promise<{
  data?: Product;
  success: boolean;
  message?: string;
}> => {
  try {
    const response: AxiosResponse<Product> = await axios.get(
      `${process.env.PRODUCT_BY_ID_API as string}${id}`
    );
    return { data: response.data, success: true };
  } catch (error) {
    console.error(`Error fetching products for product ${id}--------`, error);
    return {
      success: false,
      message: (error as Error).message,
    };
  }
};
