import React from 'react';
import Footer from './Homepage/Components/Footer/Footer';
import Gosafe from './Homepage/Components/Gosafe/Gosafe';
import Navbar from './Homepage/Components/Navbar/Navbar';
import Offer from './Homepage/Components/Offers/Offers';
import Products from './Homepage/Components/Products/Products';
import Search from './Homepage/Components/Search/Search';

const Homepage = () => {
  return (
    <div>
        <Navbar />
        <div>
          <Search />
          <Offer />
          <Gosafe />
          <Products />
        </div>
        <div>
          <Footer />
        </div>
    </div>

  )
}

export default Homepage;