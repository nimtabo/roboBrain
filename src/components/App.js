import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from "./Navigation";
import Logo from './Logo';
import ImageLinkForm from './ImageLinkForm';
import Rank from './Rank';
import FaceRecognition from './FaceRecognition';
import '../styles/App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      desinty: {
        enable: true,
        value_area: 800
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
      <Particles className="particles"
      params={particlesOptions}
      
    />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm />
        {/*
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
