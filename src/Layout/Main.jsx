import React from 'react';
import Home from '../Home/Home/Home';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
      return (
            <div className=' flex flex-col min-h-screen'>
                  <Header></Header>
                  <Outlet></Outlet>
                  <Footer></Footer>
            </div>
      );
};

export default Main;