import Commerce from '@chec/commerce.js';

const commerceAPIKey = process.env.COMMERCEJS_PUBLIC_KEY;

export default new Commerce( commerceAPIKey );

// export const fetchCategories = () => commerce.categories.list();
// export const fetchProducts = () => commerce.products.list();