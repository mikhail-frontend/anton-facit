import React, {useMemo} from 'react';
import VideoPlayer from "./VideoPlayer";
import type {VideoJsPlayerPluginOptions} from 'video.js';

const VideoWrap = ({videoSources, timecodes = []}) => {
    const parseVideoSources:VideoJsPlayerPluginOptions = useMemo(() => {
        const defaultValue = [
            {
                src: '',
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
            autoplay: false,
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

            </div>
        </>
    );
};

export default VideoWrap;