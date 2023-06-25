import React from 'react';

const CategoryContent = ({quantity, name, image}) => {
      return (
            <div className='relative'>
                  <img className=' w-full h-[200px]' src={image} alt="" />
                  <div className=' absolute top-2/3'>
                        <p>{quantity} products</p>
                        <h2 className=' font-semibold text-xl'>{name}</h2>
                  </div>
            </div>
      );
};

export default CategoryContent;