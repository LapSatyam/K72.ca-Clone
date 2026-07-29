const Video = () => {
  return (
    <video
      className="h-full w-full object-cover pointer-events-none"
      muted
      loop
      autoPlay
      playsInline
      src="./video.mp4"
    />
  );
};

export default Video;
