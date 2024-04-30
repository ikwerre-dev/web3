import React from 'react';
import '../../App.css'
import Header from '../Header';   
import Banner from '../Banner';   
import Showcase from '../Showcase';   
import ScrollingList from '../scrollingList';   
import Footer from '../Footer';   

function Home() {
  return (
    <div id='main-body' className=''>
      <Header />
      <Banner />
      <ScrollingList />
      <Showcase />
      <Footer />
      { }
    </div>
  );
}

export default Home;

