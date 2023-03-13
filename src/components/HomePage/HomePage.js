import React, { useEffect, useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import axios from 'axios';
import Typical from 'react-typical';
import InfoCard from '../InfoCard/InfoCard';

function HomePage() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const data = JSON.stringify({
        collection: 'people',
        database: 'heroku_brk6g069',
        dataSource: 'Remember-Me',
      });
      const config = {
        method: 'post',
        // url: `https://crossorigin.me/${process.env.REACT_APP_API_URL}`,
        url: `${process.env.REACT_APP_API_URL}`,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': true,
          'api-key': process.env.REACT_APP_API_KEY,
        },
        data,
      };

      axios(config)
        .then((response) => {
          console.log('Hello');
          console.log(JSON.stringify(response.data));
          // response = JSON.stringify(response.data);
          setPeople(JSON.stringify(response.data));
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });

        // const url = `${process.env.REACT_APP_API_URL}`;
        // console.log(`url ${url}`);

      // try {
      //   const response = await axios.get(url);
      //   console.log('response', response.data);
      //   setPeople(response.data);
      //   setLoading(false);
      // } catch (e) {
      //   console.log(`There was an error ${e}`);
      // }
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
