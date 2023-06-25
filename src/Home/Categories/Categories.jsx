import React from 'react';
import livingRoom from '../../assets/category/living-room.jpg'
import accessories from '../../assets/category/accessories.jpg'
import bathroom from '../../assets/category/bathroom.jpg'
import kitchen from '../../assets/category/kitchen.jpg'
import CategoryContent from './CategoryContent';

const Categories = () => {
      return (
            <div className='mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  w-[80%] mx-auto gap-8'>
                  <div>
                        <CategoryContent name={'Living Room'} image={livingRoom} quantity={8}/>
                  </div>
                  <div>
                        <CategoryContent name={'Accessories'} image={accessories} quantity={6}/>
                  </div>
                  <div>
                        <CategoryContent name={'Bathroom'} image={bathroom} quantity={6}/>
                  </div>
                  <div>
                        <CategoryContent name={'Kitchen'} image={kitchen} quantity={4}/>
                  </div>
            </div>
      );
};

export default Categories;