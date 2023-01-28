import React, {useRef} from 'react';
import videojs from 'video.js';

const VideoPlayer = () => {

    const videoPlayer = useRef<HTMLVideoElement>(null)

    return (
        <div className="video-player">
            <video ref={videoPlayer} className="video-js"/>
        </div>
    )
}

export default VideoPlayer;