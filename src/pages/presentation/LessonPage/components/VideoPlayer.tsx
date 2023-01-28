import React, {useEffect, useRef, useState, useCallback, useMemo} from 'react';
//@ts-ignore
import videojs from 'video.js';
//@ts-ignore
import qualitySelectorPlugin from '@silvermine/videojs-quality-selector';

type VideoPlayerType = {
    options?: Record<string, any>
    events?: any[]
    globalEvents?: any[]
    timecodes?: any[]
    currentTime?: number
    crossOrigin?: string
    defaultPoster?: string
    customPoster?: string
    customEventName?: string
    playsinline?: boolean
    className?: string
    globalOptions: Record<string, any>,
    emitSth?: (eventName: string, payload: any) => void
}

const VideoPlayer: React.FC<Partial<VideoPlayerType>> = ({
                                                             options,
                                                             events,
                                                             globalEvents,
                                                             timecodes,
                                                             currentTime,
                                                             crossOrigin,
                                                             defaultPoster,
                                                             customPoster,
                                                             customEventName,
                                                             playsinline,
                                                             className,
                                                             globalOptions,
                                                             emitSth
                                                         }) => {

    const videoPlayer = useRef<HTMLVideoElement>(null)
    const [player, setPlayer] = useState(null);
    const [isReset, setIsReset] = useState(true);
    const [continuePlaying, setContinuePlaying] = useState(false);
    const [continueFullscreen, setContinueFullscreen] = useState(false);
    const [continuePIP, setContinuePIP] = useState(false);
    const [currentVolume, setCurrentVolume] = useState(null);
    const [savedPosition, setSavedPosition] = useState(0);
    // const [savedState, setSavedState] = useState(null);

    const DEFAULT_EVENTS = useMemo(() => {
        return [
            'loadeddata',
            'canplay',
            'canplaythrough',
            'play',
            'pause',
            'waiting',
            'playing',
            'ended',
            'error',
            'userinactive',
            'useractive'
        ]
    }, [])



    const initializePlayer = useCallback(() => {
        const videoPlayerElement: HTMLVideoElement = videoPlayer!.current;
        const videoOptions = {
            ...globalOptions,
            poster: customPoster || defaultPoster,
            ...options
        };
        if (playsinline && videoPlayer && videoPlayer?.current) {
            videoPlayerElement.setAttribute('playsinline', String(playsinline));
            videoPlayerElement.setAttribute('webkit-playsinline', String(playsinline));
            videoPlayerElement.setAttribute('x5-playsinline', String(playsinline));
            videoPlayerElement.setAttribute('x5-video-player-type', 'h5');
            videoPlayerElement.setAttribute('x5-video-player-fullscreen', 'x');
        }
        if (videoPlayer && videoPlayer?.current && crossOrigin !== '') {
            videoPlayerElement.crossOrigin = crossOrigin;
            videoPlayerElement.setAttribute('crossOrigin', crossOrigin);
        }
        // emit event
        const emitPlayerState = (event, value) => {
            if (event) {
                emitSth(event, player);
            }
            if (value) {
                emitSth(customEventName, {[event]: value});
            }
        };
        // events
        // eslint-disable-next-line
        const fullEvents = DEFAULT_EVENTS.concat(events).concat(globalEvents);
        // eslint-disable-next-line
        qualitySelectorPlugin(videojs);

        setPlayer(() => {
            return videojs(videoPlayerElement, videoOptions, function () {
                // watch events
                const onEdEvents = {};
                for (let i = 0; i < fullEvents.length; i++) {
                    if (typeof fullEvents[i] === 'string' && onEdEvents[fullEvents[i]] === undefined) {
                        ((event) => {
                            onEdEvents[event] = null;
                            this.on(event, () => {
                                emitPlayerState(event, true);
                            });
                        })(fullEvents[i]);
                    }
                }
                emitPlayerState('ready', null);
            });
        });

        player?.controlBar.addChild('QualitySelector');

        player?.on('qualityRequested', () => {
            const currentQuality = player.currentSources()?.find((src) => src.selected === true)?.label;
            if (currentQuality) localStorage.setItem('lastVideoResolution', currentQuality);
            setSavedPosition(() => player.currentTime());
            setContinuePlaying(() => true);
            // setSavedState(() => null)
            setContinueFullscreen(() => player.isFullscreen());
            setContinuePIP(() => player.isInPictureInPicture());
            setCurrentVolume(() => player.volume())
        });

        player?.on('qualitySelected', () => {
            if (continueFullscreen) {
                player.requestFullscreen();
            }
            setContinueFullscreen(() => false);
            if (currentVolume) {
                player.volume(currentVolume);
            }
            setCurrentVolume(() => null)
            player.currentTime(savedPosition);
        });

        player?.on('canplay', () => {
            if (continuePIP) {
                player.requestPictureInPicture();
            }
            setContinuePIP(() => false);

            if (!continuePlaying) return;
            // eslint-disable-next-line
            player.play()?.catch(() => {
            });
            setContinuePlaying(() => false);
        });

        customizeTooltip();
        addMarkers();
    }, []);

    const initPlayerScripts = useCallback(() => {
        addTimelineMarkerComponent();
        initializePlayer();
    }, []);


    // eslint-disable-next-line
    const getTimecodeValue = useCallback((time: string): string => {
        if (!timecodes || !timecodes.length) return '';
        const timeValue = time.split(':').reverse().reduce((result, timePart, index) => result + Number(timePart) * 60 ** index, 0);
        for (let i = 0; i < timecodes.length; i++) {
            if (timecodes[i].seconds > timeValue) return timecodes[i - 1]?.description;
        }
        return timecodes[timecodes.length - 1]?.description;
    }, []);

    const addTimelineMarkerComponent = useCallback(() => {

        const Component = videojs.getComponent('Component');
        const TimelineMarker = videojs.extend(Component, {
            // eslint-disable-next-line
            constructor: function (player, options) {
                // eslint-disable-next-line
                Component.apply(this, arguments);
                if (options.timeValue !== undefined) this.timeValue = options.timeValue || 0;
            },
            // eslint-disable-next-line
            createEl: function () {
                return videojs.dom.createEl('div', {className: 'vjs-timeline-marker'});
            },
            // eslint-disable-next-line
            updatePosition: function () {
                this.removeAttribute('style');
                // eslint-disable-next-line
                const fraction = this.timeValue / this.parentComponent_.duration_;
                const position = fraction * 100;
                this.setAttribute('style', `left: ${position}%`);
            }
        });
        videojs.registerComponent('TimelineMarker', TimelineMarker);
        console.log({
            Component, TimelineMarker
        })
        // eslint-disable-next-line
    }, []);

    const customizeTooltip = useCallback(() => {
        const timeDisplay = player?.controlBar.progressControl.seekBar.mouseTimeDisplay;
        if (timeDisplay) {
            // eslint-disable-next-line
            timeDisplay.timeTooltip.update = function (seekBarRect, seekBarPoint, time) {
                const timecodeValue = getTimecodeValue(time);
                timecodeValue ? this.write(`${timecodeValue}\n${time}`) : this.write(time);
            };
        }
    }, []);

    const addMarkers = useCallback(() => {
        const markers = timecodes.map(({seconds}) => player?.controlBar?.progressControl?.seekBar?.addChild('TimelineMarker', {timeValue: seconds}));
        const updateMarkers = () => {
            // eslint-disable-next-line
            markers.forEach((marker) => marker.updatePosition());
        };
        // eslint-disable-next-line
        player?.bigPlayButton.on('click', function () {
            this.requestAnimationFrame(() => {
                updateMarkers();
            });
        });
    }, [])

    const dispose = useCallback(async (callback = () => ({})) => {
        if (player && !player.dispose) return;
        // eslint-disable-next-line
        if (player?.techName_ !== 'Flash') player?.pause && player?.pause();
        // if (document.pictureInPictureElement) await document.exitPictureInPicture();
        // eslint-disable-next-line
        if ((document as any).pictureInPictureElement) {
            (player as any)?.exitPictureInPicture();
        }
        player.dispose();
        setPlayer(() => null);
        setTimeout(() => {
            setIsReset(() => false)
            setTimeout(() => {
                setIsReset(() => true)
                callback && callback();
            }, 100)
        }, 100)

    }, [])


    useEffect(() => {
        initPlayerScripts();
        if (player) {
            return () => {
                dispose(() => ({})).then(() => ({}));
            };
        }
    });

    useEffect(() => {
        dispose((): any => {
            if (options && options.sources && options.sources.length) initializePlayer();
        }).then(() => ({}));
    }, [options])

    useEffect(() => {
        if (player && currentTime !== null) player.currentTime(currentTime);
    }, [currentTime])


    return (
        <>
            {isReset && <div className={`video-player ${className}`}>
                <video ref={videoPlayer} className="video-js"/>
            </div>}
        </>
    )
}

VideoPlayer.defaultProps = {
    options: {},
    events: [],
    globalEvents: [],
    timecodes: [],
    currentTime: 0,
    crossOrigin: '',
    defaultPoster: 'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
    customPoster: '',
    customEventName: 'statechanged',
    playsinline: true,
    className: '',
    globalOptions: () => ({
        controls: true,
        controlBar: {
            remainingTimeDisplay: false,
            playToggle: {},
            setSpeed: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeMenuButton: {
                inline: false,
                vertical: true
            }
        },
        playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5],
        techOrder: ['html5'],
        userActions: {hotkeys: true},
        plugins: {}
    }),
    emitSth: (...args) => void null
}

export default VideoPlayer;