import React, { useState } from 'react';

function Dropdown(props){
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
    <button onClick={sortedArray}>Names A-Z</button>
  )
}

export default Dropdown;
