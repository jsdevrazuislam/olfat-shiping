import React from 'react'
import Navigation from './navigation'
import { Outlet } from 'react-router'
import Footer from './footer'
import AOS from "aos";
import { useEffect } from 'react';

const RootLayout = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
      offset: 50,
    });
  }, []);


  return (
    <>
      <Navigation />
      <Outlet />
      <Footer />
    </>
  )
}

export default RootLayout
