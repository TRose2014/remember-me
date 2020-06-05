import React, {useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import InfoCard from './InfoCard';
import axios from 'axios';
import Typical from 'react-typical';

function HomePage() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => { 

    async function getData() {
      const url = 'https://remember-me-1-backend.herokuapp.com/info';
      try{
        const response = await axios.get(url)
        console.log('response', response.data);
        setPeople(response.data);
        setLoading(false);
      }catch(e){
        console.log(`There was an error ${e}`)
      }
    }

    getData();

  }, []);

  return (
    <>

      {loading ? 
        <>
          <CircularProgress />
          <Typical
          steps={['Black', 1500, 'Black Lives', 1500, 'Black Lives Matter', 1500]}
          // loop={Infinity}
          wrapper="h1"
          />
          {/* <h1>Black Lives Matter</h1> */}
        </>
        
        : 
        <>
          <InfoCard props={people} />
        </>
      }
    </>
  );
}

export default HomePage;
