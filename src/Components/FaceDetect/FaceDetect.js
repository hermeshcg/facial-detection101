import React from 'react';
import './FaceDetect.css';

const FaceDetect = ({ imageUrl, box }) => {
  return (
    <div
      className="center ma"
      style={{ alignSelf: 'center', margin: '0 auto 0 33% ' }}
    >
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} width="500px" heigh="auto" />
        <div
          className="bounding-box"
          style={{
            top: box.topRow,
            right: box.rightCol,
            bottom: box.bottomRow,
            left: box.leftCol,
          }}
        ></div>
      </div>
    </div>
  );
};
export default FaceDetect;
