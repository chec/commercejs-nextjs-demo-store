import Commerce from '@chec/commerce.js';

const checAPIKey = process.env.CHEC_PUBLIC_KEY;
export default new Commerce( checAPIKey );
