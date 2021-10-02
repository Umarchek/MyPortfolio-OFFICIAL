/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ReactImageMagnify from 'react-image-magnify';
import img from '../../Assets/Projects/phot.jpg'
function Resume() {
  return (
      <div className="bigdivresizeimg">
        <ReactImageMagnify {...{
          smallImage: {
            alt: 'Wristwatch by Ted Baker London',
            isFluidWidth: true,
            src: img
          },
          largeImage: {
            src: img,
            width: 1200,
            height: 1800
          }
        }} />
      </div>
  );
}

export default Resume;
