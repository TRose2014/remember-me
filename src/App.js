import React, {useEffect, useState} from 'react';
import { CircularProgress } from '@material-ui/core';
import InfoCard from './components/InfoCard';
import Header from './components/Header';
import Footer from './components/Footer';
// import Dropdown from './components/Dropdown';
// import './App.css';
import axios from 'axios';
import Typical from 'react-typical';

function App() {
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
      <Header />

      {loading ? 
        <>
          <CircularProgress />
          <Typical
          steps={['Black', 1500, 'Lives', 1500, 'Matter']}
          // loop={Infinity}
          wrapper="h1"
          />
          {/* <h1>Black Lives Matter</h1> */}
        </>
        
        : 
        <>
          {/* <Dropdown props={people}  /> */}
          <InfoCard props={people} />
        </>
      }
      <Footer />
    </>
  );
}

export default App;
