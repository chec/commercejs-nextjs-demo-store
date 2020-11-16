/**
 * Reduces a product object from the Chec API to a list of image URLs
 *
 * @param {Object} product
 * @returns {Array<string>}
 */
const reduceProductImages = product => {
  const { assets, media } = product;
  const images = [];

  if (media && media.type === 'image') {
    images.push(media.source);
  }

  if (assets && Array.isArray(assets)) {
    return images.concat(assets.reduce((acc, asset) => {
      if (!asset.is_image || asset.url === media.source) {
        return acc;
      }

      return [...acc, asset.url];
    }, []));
  }

  return images;
};

export default reduceProductImages;
