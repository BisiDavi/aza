import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Banner1, Banner2, Banner3 } from "./imports";
import '../styles/carousel.css';

class Autoslider extends React.Component {
  render() {
    return (
      <Carousel autoPlay infiniteLoop interval="4000" showThumbs={false}>
        <div>
          <Banner1 />
        </div>
        <div>
          <Banner2 />
        </div>
        <div>
          <Banner3 />
        </div>
      </Carousel>
    );
  }
}

export default Autoslider;