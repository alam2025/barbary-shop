import React from 'react';
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
const ProductCart = ({ product }) => {
      const { name, _id, image, price, rating } = product
      return (
            <div className=' p-3 hover:shadow-2xl'>
                  <div className=' overflow-hidden'>
                        <img className='w-full h-[200px] transition duration-1000 hover:transform hover:scale-110' src={image} alt="" />
                  </div>
                  <div className=' mt-4'>
                        <h2 className=' text-xl font-semibold'>{name}</h2>
                        <p className=' text-xl text-orange-600'>${price}</p>
                        <p className=' mt-2'>
                              {<Rating
                                    placeholderRating={rating}
                                    readonly
                                    emptySymbol={<AiOutlineStar />}
                                    placeholderSymbol={<AiFillStar className=' text-amber-500' />}
                                    fullSymbol={<AiFillStar className=' text-amber-500' />}>

                              </Rating>}{rating}
                        </p>
                  </div>

            </div>
      );
};

export default ProductCart;