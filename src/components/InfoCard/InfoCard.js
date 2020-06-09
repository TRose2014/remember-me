/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Card, CardContent, Typography, Avatar,
} from '@material-ui/core';
import './InfoCard.css';

function InfoCard(props) {
  const [people, setPeople] = useState(props.props);

  function compare(a, b) {
    const personA = a.name.toUpperCase();
    const personB = b.name.toUpperCase();

    let comparison = 0;
    if (personA > personB) {
      comparison = 1;
    } else if (personA < personB) {
      comparison = -1;
    }
    return comparison;
  }

  function sortedArray() {
    setPeople([...people].sort(compare));
  }

  return (
    <div style={{"width": "100%"}}>
      <select onClick={sortedArray}>
        <option value="Sort First Names A-Z">Sort First Names A-Z</option>
      </select>
      <div className="container">
        {people.map((person, index) => (
          <Card key={index} className="cardContainer">
            <CardContent>
              <Avatar alt={person.name} src={person.image_url} variant="square" style={{ width: '100%', height: 'auto' }} />
              <Typography className="name">
                {person.name}
              </Typography>
              <Typography>
                <span>About Me: </span>
                {person.personal_bio}
              </Typography>
              <Typography>
                <span>{person.date_lost}</span>
              </Typography>
              <em>Remember Me</em>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default InfoCard;
