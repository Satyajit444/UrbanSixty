import axios, { AxiosResponse } from "axios";
import { Product } from "@/types";

export const getAllCategory = async (): Promise<{
  data?: [];
  success: boolean;
  message?: string;
}> => {
  try {
    const response: AxiosResponse<[]> = await axios.get(
      process.env.PRODUCT_CATEGORIES_API as string
    );
    return { data: response.data, success: true };
  } catch (error) {
    console.error("All category error--------", error);
    return {
      success: false,
      message: (error as Error).message,
    };
  }
};

export const getCategoryProducts = async (
  categoryName: string
): Promise<{
  data?: Product[];
  success: boolean;
  message?: string;
}> => {
  try {
    const response: AxiosResponse<Product[]> = await axios.get(
      `${process.env.PRODUCTS_BY_CATEGORY_API as string}${categoryName}`
    );
    return { data: response.data, success: true };
  } catch (error) {
    console.error(
      `Error fetching products for category ${categoryName}--------`,
      error
    );
    return {
      success: false,
      message: (error as Error).message,
    };
  }
};
