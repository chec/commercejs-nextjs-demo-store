export default product => {
  const { assets, media } = product;
  const images = [];

  if (media && media.type === 'image') {
    images.push(media.source);
  }

  if (assets && Array.isArray(assets)) {
    return images.concat(assets.reduce((acc, asset) => {
      if (!asset.is_image) {
        return acc;
      }

      return [...acc, asset.url];
    }, []));
  }

  return images;
}
