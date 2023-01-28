// eslint-disable-next-line
export default '';
// import {useCallback} from "react";
//
// const customizeTooltip = useCallback(() => {
//     const timeDisplay = player.controlBar.progressControl.seekBar.mouseTimeDisplay;
//     if (timeDisplay) {
//         // eslint-disable-next-line
//         timeDisplay.timeTooltip.update = function (seekBarRect, seekBarPoint, time) {
//             const timecodeValue = getTimecodeValue(time);
//             timecodeValue ? this.write(`${timecodeValue}\n${time}`) : this.write(time);
//         };
//     }
// }, []);
//
// const addMarkers = useCallback(() => {
//     const markers = timecodes.map(({seconds}) => player?.controlBar?.progressControl?.seekBar?.addChild('TimelineMarker', {timeValue: seconds}));
//     const updateMarkers = () => {
//         // eslint-disable-next-line
//         markers.forEach((marker) => marker.updatePosition());
//     };
//     // eslint-disable-next-line
//     player.bigPlayButton.on('click', function () {
//         this.requestAnimationFrame(() => {
//             updateMarkers();
//         });
//     });
// }, [])
