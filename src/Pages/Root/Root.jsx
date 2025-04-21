import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
   <div className='w-11/12 mx-auto'>
   <Header></Header>
   <Outlet></Outlet>
   <Footer></Footer>
   </div>
  );
};

export default Root;