import React from 'react';

const CategoryContent = ({ quantity, name, image }) => {
      return (
            <div className=''>
                  <div className='relative'>
                        <div className='overflow-hidden'>
                              <img className='w-full h-[200px] transition duration-1000 hover:transform hover:scale-110' src={image} alt="" />
                        </div>
                        <div className=''>
                              <p>{quantity} products</p>
                              <h2 className='font-semibold text-xl hover:underline transition duration-500'>{name}</h2>
                        </div>
                  </div>
            </div>


      );
};

export default CategoryContent;