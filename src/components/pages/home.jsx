import React from 'react';
import '../../App.css'
import Header from '../Header';  // Adjust path if necessary
import Banner from '../Banner';  // Adjust path if necessary
import Showcase from '../Showcase';  // Adjust path if necessary
import ScrollingList from '../scrollingList';  // Adjust path if necessary
import Footer from '../Footer';  // Adjust path if necessary

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

