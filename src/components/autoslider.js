import React, { Component } from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Banner1, Banner2, Banner3, banner1, banner2, banner3 } from "./imports";

class Autoslider extends Component {
  render() {
    return (
      <Carousel>
        <div>
          <img src={Banner1} alt="banner" />
        </div>
        <div>
          <img src={Banner2} alt="banner" />
        </div>
        <div>
          <img src={Banner3} alt="banner" />
        </div>
      </Carousel>
    );
  }
}

export default Autoslider;