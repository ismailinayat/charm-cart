
import React from 'react';
import Rating from '@mui/material/Rating';
import Link from 'next/link';
import Image from 'next/image';

const ProductCard = ({id, title, price, discountPercentage, rating, brand, images, stock }) => {

  const discountedPrice = (price - ((price * discountPercentage) / 100)).toFixed();

  return (
    <Link href={`/product/${id}`}>
      <div className="flex flex-col justify-center items-center bg-gray-50">
        <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 w-72">
        <div className='overflow-hidden h-36'>
  <Image
    src={images[0]}
    alt="Product image"
    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    width={100}
    height={100}
  />
</div>
          <div className="px-4 py-3">
            <div>
              {stock < 30 && (
                <span className="text-red-500 mr-3 uppercase text-xs">Limited Stock</span>
              )}
            </div>
            <span className="text-gray-400 mr-3 uppercase text-xs">{brand}</span>
            <p className="text-lg font-bold text-black truncate block capitalize">{title}</p>
            <div className="flex items-center">
              <p className="text-lg font-semibold text-black cursor-auto my-3">{`$${discountedPrice}`}</p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">{`$${price}`}</p>
              </del>
            </div>
          </div>

          <Rating name="read-only" value={rating} readOnly />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;