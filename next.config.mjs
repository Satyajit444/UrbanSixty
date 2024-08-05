/** @type {import('next').NextConfig} */
const url = 'https://fakestoreapi.com';
const nextConfig = {
  env: {
    // Product Endpoints
    PRODUCTS_API: `${url}/products`,
    PRODUCT_BY_ID_API: `${url}/products/`,
    PRODUCT_CATEGORIES_API: `${url}/products/categories`,
    PRODUCTS_BY_CATEGORY_API: `${url}/products/category/`,

    // Cart Endpoints
    CARTS_API: `${url}/carts`,
    CART_BY_ID_API: `${url}/carts/`,

    // User Endpoints
    USERS_API: `${url}/users`,
    USER_BY_ID_API: `${url}/users/`,

    USER_SIGN_UP_API: `${url}/auth/login`,
  },
};

export default nextConfig;
