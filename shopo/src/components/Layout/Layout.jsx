import React from 'react'

import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
const layout = ({ children }) => {
    return (
   
   <>
  <Navbar/>
  
   <main>{children}</main>
 <Footer/>
   </>
  );
};

export default layout