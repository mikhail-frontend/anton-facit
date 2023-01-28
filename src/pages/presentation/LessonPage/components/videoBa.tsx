import React from 'react';
const BA = () => <></>;
export default BA;

// import React, { useRef, useEffect } from 'react';
// import videojs from 'video.js';
//
// const VideoPlayer = ({    options,
//                          events,
//                          globalEvents,
//                          timecodes,
//                          currentTime,
//                          crossOrigin,
//                          defaultPoster,
//                          customPoster,
//                          customEventName,
//                          className,
//                          playsinline }) => {
//     const videoPlayer = useRef(null);
//
//     useEffect(() => {
//         const player = videojs(videoPlayer.current, {
//             controls: true,
//             controlBar: {
//                 remainingTimeDisplay: false,
//                 playToggle: {},
//                 setSpeed: {},
//                 progressControl: {},
//                 fullscreenToggle: {},
//                 volumeMenuButton: {
//                     inline: false,
//                     vertical: true
//                 }
//             },

//             playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2, 2.5],
//             techOrder: ['html5'],
//             userActions: { hotkeys: true },
//         }, () => {
//             // handle player events
//             events.forEach(eventName => {
//                 player.on(eventName, e => console.log(eventName, e));
//             });
//
//             // handle global events
//             globalEvents.forEach(eventName => {
//                 videojs.on(eventName, e => console.log(eventName, e));
//             });
//
//             // add timecodes
//             timecodes.forEach(timecode => {
//                 player.currentTime(timecode.time);
//                 player.addChild('TimelineMarker', { timeValue: timecode.time });
//             });
//
//             // set current time
//             if (currentTime) {
//                 player.currentTime(currentTime);
//             }
//         });
//
//         // set crossorigin attribute
//         if (crossOrigin) {
//             player.el().setAttribute('crossOrigin', crossOrigin);
//         }
//
//         // set default poster
//         if (defaultPoster) {
//             player.poster(defaultPoster);
//         }
//
//         // set custom poster
//         if (customPoster) {
//             player.poster(customPoster);
//         }
//
//         // set playsinline attribute
//         if (playsinline) {
//             player.playsinline(playsinline);
//         }
//
//         // handle custom event
//         if (customEventName) {
//             player.on(customEventName, e => console.log(customEventName, e));
//         }
//
//         // cleanup
//         return () => {
//             player.dispose();
//         };
//     }, []);
//
//     return (
//         <div className={className || ''}>
//             <video ref={videoPlayer} className="video-js"/>
//         </div>
//     );
// };
//
// export default VideoPlayer;
