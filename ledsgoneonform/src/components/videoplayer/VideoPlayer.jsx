import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoID, setLoading }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    console.log("useEffect - ready:", ready);
    if (ready) {
      setLoading(false);
    }
  }, [ready, setLoading]);

  return (
    <YouTube
      videoId={videoID}
      opts={{
        height: "100%",
        width: "100%",
        playerVars: {
          // autoplay: 1,
        },
      }}
      onReady={() => {
        console.log("onReady");
        setReady(true);
      }}
    />
  );
};

export default VideoPlayer;
