import React from 'react'
import './Videos.css'
import video from './Rebel_Rhinos.mp4'
function Videos() {
  return (
    <div>
         <video  className=" play"
         muted
         autoPlay
        src={video}
         type="video/mp4"
         loop
        ></video>
    </div>
  )
};
export default Videos;
