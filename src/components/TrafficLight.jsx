import React, { useEffect, useState } from 'react';
import './TrafficLight.css';

const TrafficLight = () => {
    const [light, setLight] = useState('red');

  useEffect(() => {
    let timer;
    if(light === 'red') {
        timer = setTimeout(() => setLight('green'), 3000);
    } else if(light === 'green') {
        timer = setTimeout(() => setLight('yellow'), 4000);
    } else {
        timer = setTimeout(() => setLight('red'), 5000);
    }
    return () => clearTimeout(timer);
  }, [light]);
  return (
    <div className='traffic-light'>
        <h4>TrafficLight</h4>
        <div className={`light red ${light === 'red' ? 'active' : ''}`} ></div>
        <div className={`light yellow ${light === 'yellow' ? 'active' : ''}`} ></div>
        <div className={`light green ${light === 'green' ? 'active' : ''}`} ></div>
    </div>
  )
}

export default TrafficLight;