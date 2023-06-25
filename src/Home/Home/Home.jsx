import React from 'react';
import Banner from '../Banner/Banner';
import Categories from '../Categories/Categories';
import RecentProducts from '../RecentProduct/RecentProducts';

const Home = () => {
      return (
            <div className=' bg-white '>
                  <Banner/>
                  <Categories/>
                  <RecentProducts/>
            </div>
      );
};

export default Home;