/**
 * Reduces a product object from the Chec API to a list of image URLs
 *
 * @param {Object} product
 * @returns {Array<string>}
 */
const reduceProductImages = (product) => {
  const { assets, image } = product;
  const images = [];

  if (image && image.is_image) {
    images.push(image.url);
  }

  if (assets && Array.isArray(assets)) {
    return images.concat(assets.reduce((acc, asset) => {
      if (!asset.is_image || asset.url === image.url) {
        return acc;
      }

      return [...acc, asset.url];
    }, []));
  }

  return images;
};

export default reduceProductImages;
