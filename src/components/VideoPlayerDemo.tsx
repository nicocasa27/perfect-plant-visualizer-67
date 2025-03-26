
import React from "react";
import VideoPlayer from "@/components/ui/video-player";

const VideoPlayerDemo = () => {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
      <VideoPlayer src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4" />
    </div>
  );
};

export { VideoPlayerDemo };
