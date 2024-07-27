/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    // Product Endpoints
    PRODUCTS_API: "https://fakestoreapi.com/products",
    PRODUCT_BY_ID_API: "https://fakestoreapi.com/products/",
    PRODUCT_CATEGORIES_API: "https://fakestoreapi.com/products/categories",
    PRODUCTS_BY_CATEGORY_API: "https://fakestoreapi.com/products/category/",

    // Cart Endpoints
    CARTS_API: "https://fakestoreapi.com/carts",
    CART_BY_ID_API: "https://fakestoreapi.com/carts/",

    // User Endpoints
    USERS_API: "https://fakestoreapi.com/users",
    USER_BY_ID_API: "https://fakestoreapi.com/users/",
  },
};

export default nextConfig;
