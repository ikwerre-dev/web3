import React from 'react';
import '../../App.css'
import '../Details.css'
import Header from '../Header';  // Adjust path if necessary
import Banner from '../Banner';  // Adjust path if necessary
import Showcase from '../Showcase';  // Adjust path if necessary
import ScrollingList from '../scrollingList';  // Adjust path if necessary
import Footer from '../Footer';  // Adjust path if necessary
import TradingViewWidget from '../TradingViewWidget';
function Details() {
  return (
    <div  className='details'>
      <Header />
      <ScrollingList />
      <div className="row p-5">
        <div className="col-sm-7" s>
        <TradingViewWidget/>
        </div>
        <div className="col-5">

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;

