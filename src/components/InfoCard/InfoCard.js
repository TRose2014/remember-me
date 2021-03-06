/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Card, CardContent, Typography,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import './InfoCard.css';
import defaultImage from '../../assets/Single-fist.png';

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
    <div className="holder">
      <select onClick={sortedArray}>
        <option value="Sort First Names A-Z">Sort First Names A-Z</option>
      </select>
      <div className="container">
        {people.map((person) => (
          <Card key={uuidv4()} className="cardContainer">
            <CardContent>
              <img alt={person.name} src={person.image_url} onError={(e) => { e.target.src = defaultImage; }} style={{ objectFit: 'contain', width: '100%', height: '250px' }} />
              <Typography className="name">
                {person.name}
              </Typography>
              <Typography>
                {person.personal_bio}
              </Typography>
              <br />
              <Typography>
                {person.last_seen}
              </Typography>
              <br />
              <Typography>
                <span>{person.date_lost}</span>
              </Typography>
              <br />
              <em>Remember Me</em>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default InfoCard;
