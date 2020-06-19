import React from 'react';
import Typewriter from 'typewriter-effect';

const Typewrite = () => {
  return (
    <Typewriter
      options={{
        strings: ['Fast and Reliable', 'Grow your cash with Aza', 'Invest and Get 50% ROI'],
        autoStart: true,
        loop: true,
        deleteSpeed: 'natural'
      }}
    />
  )
}

export default Typewrite