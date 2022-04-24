import React, {useState} from 'react';
import './style.css';
import lightOn from './img/light-on.svg';
import lightOff from './img/light-off.svg';



const Light = ({name, state}) => {
  const [light, setLight] = useState(state);
  const handleClick = () => {
    let newLightState
    {light === 'on' ? newLightState = 'off' : newLightState = 'on'}
    setLight(newLightState);
  };

  return (
    <div className="light" onClick={handleClick}>
      <div className="light__icon">{ light === 'on' ? <img src={`${lightOn}`} /> : <img src={`${lightOff}`} /> }</div>
      <div className="light__name">{name}</div>
    </div>
  )
};



export default Light;