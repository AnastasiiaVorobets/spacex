import React from 'react';
import Header from '../Header/Header';
import TourList from '../TourList/TourList';
import { tours } from '../../../utils/tour';


const Home: React.FC = () => {

  return (
    <>
      <Header />
      <TourList tours={tours} />
    </>
  );
};

export default Home;
