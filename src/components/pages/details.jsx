import React from 'react';
import '../../App.css'
import '../Details.css'
import Header from '../Header';    
import ScrollingList from '../scrollingList';   
import Footer from '../Footer';   
import TradingViewWidget from '../TradingViewWidget';
import ViewTokenLeft from '../ViewTokenLeft';
import DetailsCard from '../DetailsCard';
import { useParams } from 'react-router-dom';
import showcaseData from '../functions/useShowcaseData';

function Details() {
  let { id } = useParams();
  // Extract ticker names from showcaseData
  const items = showcaseData.map(item => ({
    id: item.id,
    name: item.ticker
  }));
  return (
    <div className='details'>
      <Header />
      <ScrollingList items={items}  />
      <div className="row p-5">
        <div className="col-sm-8">
          <TradingViewWidget />
          <ViewTokenLeft id={id} />
        </div>
        <div className="col-4">
          <DetailsCard id={id} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Details;
