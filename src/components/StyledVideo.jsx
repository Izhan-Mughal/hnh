import React from "react";
import VideoBackground1 from "../assets/img/vid1.png";
import VideoBackground2 from "../assets/img/vidpattern.png";
import Video from "../assets/img/video.png";
import VidButton from "./VidButton";
const StyledVideo = () => {
  return (
    <>
      <div className="position-relative mt-5">
        <img src={VideoBackground1} className="videobg" alt="" />
        <img src={VideoBackground2} className="vidpattern" alt="" />
        <img src={Video} className="video" alt="" />
        <VidButton/>
      </div>
    </>
  );
};

export default StyledVideo;
