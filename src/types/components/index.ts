
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
  