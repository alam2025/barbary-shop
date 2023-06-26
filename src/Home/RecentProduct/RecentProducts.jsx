import React from 'react';
import useProduct from '../../hooks/useProduct';
import ProductCart from './ProductCart';

const RecentProducts = () => {
      let [products] = useProduct()
      products= products.slice(0,8)
      return (
            <div className=' mt-24 mb-20 md:w-[80%] mx-auto'>
                  <div className=' text-center'>
                        <h1 className=' text-3xl font-semibold '>Recent Products</h1>
                        <p className=' text-xl'>Recent posuere neque eu lectus ultrices</p>
                  </div>
                  <div className=' grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4'>
                        {products.map(product=><ProductCart
                        key={product._id}
                        product={product}
                        ></ProductCart>)}
                  </div>
            </div>
      );
};

export default RecentProducts;