import React from 'react';
import '../../App.css'
import Header from '../Header';
import Banner from '../Banner';
import Showcase from '../Showcase';
import ScrollingList from '../scrollingList';
import Footer from '../Footer';
import showcaseData from '../functions/useShowcaseData';

function Home() {

  // Extract ticker names from showcaseData
  const items = showcaseData.map(item => ({
    id: item.id,
    name: item.ticker
  }));
  return (
    <div id='main-body' className=''>
      <Header />
      <Banner />
      <ScrollingList items={items} />
      <Showcase />
      <Footer />
      { }
    </div>
  );
}

export default Home;

