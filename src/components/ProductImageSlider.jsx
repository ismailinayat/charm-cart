"use client"

import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
const ProductCard = ({images}) => {


  return (
    <ImageGallery items={images.map((url) => ({ original: url, thumbnail: url }))} />
  );
};

export default ProductCard;
