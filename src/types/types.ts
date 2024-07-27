// Global interfaces and types

// product interface
export interface Product {
  id: number;
  name: string;
  price: number;
  // Add other product fields if needed
}

export interface LoaderProps {
  color?: string;
  size?: string;
  loadingTitle?: string;
}

export interface ButtonProps {
  bgColor: string;
  textColor: string;
  label: string;
  type?: "button" | "submit" | "reset"; // Default to 'button' if not provided
  onClick?: () => void;
}

export interface SkeletonLoaderProps {
  type: "text" | "rectangle" | "circle";
  width?: string;
  height?: string;
  borderRadius?: string;
}
