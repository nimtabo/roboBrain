import React from 'react';
import Tilt from 'react-tilt';
import ailogo from './img/artificial-intelligence.png'
import '../styles/logo.css';


const Logo = () => {
  return (
    <div className="ma4 mt0">
      <Tilt className="Tilt br2 shadow-2" options={{ max: 50 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner">
          <img src={ailogo} alt="logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;