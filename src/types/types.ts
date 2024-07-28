// Global interfaces and types

// product interface
// @/types/types.ts
export interface Product {
  id: number;
  name: string;
  price: number;
  title: string;
  description: string;
  category: string;
  image: string;
}

// global components interface

export interface LoaderProps {
  color?: string;
  size?: string;
  loadingTitle?: string;
}

export interface ButtonProps {
  bgColor: string;
  textColor: string;
  label: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export interface SkeletonLoaderProps {
  type: "text" | "rectangle" | "circle";
  width?: string;
  height?: string;
  borderRadius?: string;
}

export interface PaginationProps {
  totalCount: number;
  pageSize: number;
  loading?: boolean;
  getCurrentPage?: (currentPage: number) => void;
  refresh?: () => void;
  reset?: number;
}


// user interface
export interface Geolocation {
  lat: string;
  long: string;
}

export interface Address {
  city: string;
  street: string;
  number: number;
  zipcode: string;
  geolocation: Geolocation;
}

export interface Name {
  firstname: string;
  lastname: string;
}

export interface User {
  id: number;
  email: string;
  username: string;
  password: string;
  name: Name;
  address: Address;
  phone: string;
}
