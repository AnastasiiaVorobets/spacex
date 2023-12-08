import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Header from '../Header/Header';
import TourList from '../TourList/TourList';
import { getRockets } from '../../../queries/queries';
import { Tour } from '../../../types/tourType';
import { addImage } from '../../../utils/addImage';

const Home: React.FC = () => {
  const [rocketsData, setRocketsData] = useState<Tour[]>([]);

  const { loading, error } = useQuery(getRockets, {
    onCompleted: ({ rockets }) => {
      const data = rockets.map(addImage);
      setRocketsData(data);
    },
  });

  return (
    <>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error loading data</p>
      ) : (
        <TourList tours={rocketsData} />
      )}
    </>
  );
};

export default Home;
