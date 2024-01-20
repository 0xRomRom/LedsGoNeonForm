import YouTube from "react-youtube";

const VideoPlayer = ({ videoID }) => {
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
      }}
    />
  );
};

export default VideoPlayer;
