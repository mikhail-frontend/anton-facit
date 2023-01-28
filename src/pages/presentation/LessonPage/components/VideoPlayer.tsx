import React, { useEffect, useRef, useState, useCallback, useMemo } from 'react';
//@ts-ignore
import videojs from 'video.js';
//@ts-ignore
import qualitySelectorPlugin from '@silvermine/videojs-quality-selector';

type VideoPlayerType = {
	options?: Record<string, any>;
	events?: any[];
	globalEvents?: any[];
	timecodes?: any[];
	currentTime?: number;
	crossOrigin?: string;
	defaultPoster?: string;
	customPoster?: string;
	customEventName?: string;
	playsinline?: boolean;
	className?: string;
	globalOptions: Record<string, any>;
	emitSth?: (eventName: string, payload: any) => void;
};

const VideoPlayer: React.FC<Partial<VideoPlayerType>> = ({
	options,
	events,
	globalEvents,
	currentTime,
	crossOrigin,
	defaultPoster,
	customPoster,
	customEventName,
	playsinline,
	className,
	globalOptions,
	emitSth,
}) => {
	const videoPlayer = useRef<HTMLVideoElement>(null);
	const [player, setPlayer] = useState(null);
	const [isReset, setIsReset] = useState(true);
	const [continuePlaying, setContinuePlaying] = useState(false);
	const [continueFullscreen, setContinueFullscreen] = useState(false);
	const [continuePIP, setContinuePIP] = useState(false);
	const [currentVolume, setCurrentVolume] = useState(null);
	const [savedPosition, setSavedPosition] = useState(0);

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
			'useractive',
		];
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
				return videojs.dom.createEl('div', { className: 'vjs-timeline-marker' });
			},
			// eslint-disable-next-line
            updatePosition: function () {
				this.removeAttribute('style');
				// eslint-disable-next-line
                const fraction = this.timeValue / this.parentComponent_.duration_;
				const position = fraction * 100;
				this.setAttribute('style', `left: ${position}%`);
			},
		});
		videojs.registerComponent('TimelineMarker', TimelineMarker);
		// eslint-disable-next-line
    }, []);

	const initializePlayer = useCallback(async () => {
		const videoPlayerElement: HTMLVideoElement = videoPlayer!.current;
		const videoOptions = {
			...globalOptions,
			poster: customPoster || defaultPoster,
			...options,
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
				emitSth(customEventName, { [event]: value });
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
					if (
						typeof fullEvents[i] === 'string' &&
						onEdEvents[fullEvents[i]] === undefined
					) {
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
		// eslint-disable-next-line
	}, []);

	const initPlayerScripts = useCallback(() => {
		addTimelineMarkerComponent();
		initializePlayer().then(() => ({}));
		// eslint-disable-next-line
	}, []);

	const dispose = useCallback(async (callback = () => ({})) => {
		if (player && !player.dispose) return;
		if (!player) return;
		// eslint-disable-next-line
        if (player.techName_ !== 'Flash') player.pause && player.pause();
		// if (document.pictureInPictureElement) await document.exitPictureInPicture();
		// eslint-disable-next-line
        if ((document as any).pictureInPictureElement) {
			(player as any).exitPictureInPicture();
		}
		player.dispose();
		setPlayer(() => null);
		setTimeout(() => {
			setIsReset(() => false);
			setTimeout(() => {
				setIsReset(() => true);
				callback && callback();
			}, 100);
		}, 100);
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		(async () => {
			await initPlayerScripts();
			if (!player) return;
			player.controlBar.addChild('QualitySelector');

            const Button = videojs.getComponent('Button');
            const BackButton = videojs.extend(Button, {
                constructor: function() {
                    Button.apply(this, arguments);
                    this.addClass('back-btn')
                },
                handleClick: function() {
                    player.currentTime(player.currentTime() < 15 ? 0 : player.currentTime() - 15 )
                }
            });
            const ForwardBtn = videojs.extend(Button, {
                constructor: function() {
                    Button.apply(this, arguments);
                    this.addClass('forward-btn')
                },
                handleClick: function() {
                    player.currentTime(player.currentTime() + 15 )
                }
            });
            videojs.registerComponent('BackButton', BackButton);
            videojs.registerComponent('ForwardBtn', ForwardBtn);
            player.getChild('controlBar').addChild('BackButton', {});
            player.getChild('controlBar').addChild('ForwardBtn', {});
            player.on('qualityRequested', () => {
				const currentQuality = player
					.currentSources()
					?.find((src) => src.selected === true)?.label;
				if (currentQuality) localStorage.setItem('lastVideoResolution', currentQuality);
				setSavedPosition(() => player.currentTime());
				setContinuePlaying(() => true);
				// setSavedState(() => null)
				setContinueFullscreen(() => player.isFullscreen());
				setContinuePIP(() => player.isInPictureInPicture());
				setCurrentVolume(() => player.volume());
			});

			player.on('qualitySelected', () => {
				if (continueFullscreen) {
					player.requestFullscreen();
				}
				setContinueFullscreen(() => false);
				if (currentVolume) {
					player.volume(currentVolume);
				}
				setCurrentVolume(() => null);
				player.currentTime(savedPosition);
			});

			player.on('canplay', () => {
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
		})();
		if (player) {
			return () => {
				dispose(() => ({})).then(() => ({}));
			};
		}
		// eslint-disable-next-line
	}, [player]);

	useEffect(() => {
		dispose((): any => {
			if (options && options.sources && options.sources.length) initializePlayer();
		}).then(() => ({}));
		// eslint-disable-next-line
	}, [options]);

	useEffect(() => {
		if (player && currentTime !== null) player.currentTime(currentTime);
		// eslint-disable-next-line
	}, [currentTime]);

	return (
		<>
			{isReset && (
				<div className={`video-player ${className}`}>
					<video ref={videoPlayer} className='video-js' />
				</div>
			)}
		</>
	);
};

VideoPlayer.defaultProps = {
	options: {},
	events: [],
	globalEvents: [],
	timecodes: [],
	currentTime: 0,
	crossOrigin: '',
	defaultPoster:
		'https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg',
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
				vertical: true,
			},
		},
		playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5],
		techOrder: ['html5'],
		userActions: { hotkeys: true },
		plugins: {},
	}),
	emitSth: (...args) => void null,
};

export default VideoPlayer;
