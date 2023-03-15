import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Typical from 'react-typical';
import InfoCard from '../InfoCard/InfoCard';
import data from '../../data/dataInfo.json';

function HomePage() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {

      try {
        // setTimeout(() => 2000)
        setPeople(data);
        setLoading(false);
        console.log(people);
      } catch (e) {
        console.log(`There was an error ${e}`);
      }

    }

    getData();
  }, []);

  return (
    <>

      {loading
        ? (
          <>
            <CircularProgress />
            <Typical
              steps={['Black', 1500, 'Black Lives', 1500, 'Black Lives Matter', 1500]}
              wrapper="h1"
            />
          </>
        )

        : (
          <>
            <InfoCard props={people} />
          </>
        )}
    </>
  );
}

export default HomePage;
