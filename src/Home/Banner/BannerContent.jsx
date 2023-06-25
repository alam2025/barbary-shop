import React from 'react';

const BannerContent = ({ subTitle, title,image }) => {
      return (
            <div className='flex justify-between items-center bg-slate-100 px-[10%] gap-10'>
                  <div className=' flex flex-col gap-6'>
                        <h4 className=' uppercase md:text-base text-base'>{subTitle}</h4>
                        <h1 className=' lg:text-5xl font-extrabold'>{title}</h1>
                        <button className=' underline hover:no-underline underline-offset-8'>Shop Now</button>
                  </div>
                  <div>
                        <img className=' w-full h-full' src={image} alt="" />
                  </div>

            </div>
      );
};

export default BannerContent;