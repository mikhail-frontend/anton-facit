import React, {useMemo} from 'react';
//@ts-ignore
import VideoPlayer from "./VideoPlayer";
//@ts-ignore
import type {VideoJsPlayerPluginOptions} from 'video.js';
type VideoWrapType = {
    videoUrl: string
    defaultPoster: string
    customPoster: string
    videoSources: any
    currentTime: number
    autoplay: boolean
    timecodes: any[]

}
const VideoWrap:React.FC<Partial<VideoWrapType>> = ({
                                                        videoUrl,
                                                        defaultPoster,
                                                        customPoster,
                                                        videoSources,
                                                        currentTime,
                                                        autoplay,
                                                        timecodes
                                                    }) => {
    const parseVideoSources:VideoJsPlayerPluginOptions = useMemo(() => {
        const defaultValue = [
            {
                src: videoUrl,
                type: 'video/mp4',
                label: 'original',
                selected: true
            }
        ];

        if (!videoSources) return defaultValue;
        const {availableResolutions, ...sources} = videoSources;
        if (!availableResolutions || !Array.isArray(availableResolutions)) return defaultValue;
        const storageResolution = null
        const defaultResolution = availableResolutions.find((res) => res === Number(storageResolution)) || availableResolutions.find((res) => res === 480) || availableResolutions[0]
        return [...availableResolutions]?.sort((a, b) => Number(b) - Number(a)).map((resolution) => ({
            type: 'video/mp4',
            label: resolution,
            src: sources[resolution] || '',
            selected: resolution === defaultResolution
        }));
    }, []);

    const videoOptions = useMemo(() => {
        return {
            autoplay: autoplay,
            controls: true,
            controlBar: {
                timeDivider: true,
                durationDisplay: true
            },
            volume: 1,
            flash: {hls: {withCredentials: false}},
            html5: {hls: {withCredentials: false}},
            sources: parseVideoSources
        }
    }, []);

    return (
        <>
            <div className="player">
                <VideoPlayer
                    options={videoOptions}
                    currentTime={currentTime}
                    timecodes={timecodes}
                    defaultPoster={defaultPoster}
                    customPoster={customPoster}
                    className='vjs-custom-skin'
                />
            </div>
        </>
    );
};

VideoWrap.defaultProps = {
    videoUrl: '',
    defaultPoster: '',
    customPoster: '',
    videoSources: {availableResolutions: [], sources: [] },
    currentTime: 0,
    autoplay: false,
    timecodes: []
}

export default VideoWrap;