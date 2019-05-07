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
  constructor(){
    super()

    this.state = {
      input: '',
    }
  }

  onInputChange = (event)=> {
    console.log(event.target.value);
  };

  onUrlSubmit = () => {
    console.log('click');
  }

  render() {
    return (
      <div className="App">
      <Particles className="particles"
      params={particlesOptions}
      
    />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onUrlSubmit={this.onUrlSubmit} />
        {/*
        <FaceRecognition />*/}
      </div>
    );
  }
}

export default App;
