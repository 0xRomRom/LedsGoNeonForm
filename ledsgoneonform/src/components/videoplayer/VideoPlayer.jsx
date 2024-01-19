import React from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoID }) => {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // autoplay: 1,
    },
  };

  return <YouTube videoId={videoID} opts={opts} />;
};

export default VideoPlayer;
