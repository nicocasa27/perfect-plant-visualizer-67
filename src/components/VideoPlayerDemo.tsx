
import React from "react";
import VideoPlayer from "@/components/ui/video-player";

const VideoPlayerDemo = () => {
    return <VideoPlayer 
        src="https://videos.pexels.com/video-files/30333849/13003128_2560_1440_25fps.mp4"
        autoPlay={true}
    />;
};

export { VideoPlayerDemo };
