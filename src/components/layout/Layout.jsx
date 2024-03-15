import React from 'react';
import Navbar from '../navbar/Navbar.jsx';
import Footer from '../footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;