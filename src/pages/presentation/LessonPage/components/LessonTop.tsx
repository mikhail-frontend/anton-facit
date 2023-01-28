import React, { useState } from 'react';
import classNames from 'classnames';
import VideoWrap from './VideoWrap';
import styles from './LessonTop.module.scss';
import PlayIcon from '../assets/play-button.png';

type LessonTopType = {
	image: string;
	title: string;
	video: any;
	videoSources: any;
};
const LessonTop: React.FC<LessonTopType> = ({ image, title, video, videoSources }) => {
	const [videoMode, setVideoMode] = useState(false);
	return (
		<div className='col-12'>
			{!videoMode && (
				<div
					className={classNames(
						'ratio ratio-21x9',
						'rounded-2',
						'mb-3',
						'bg-l10-danger',
					)}>
					<img
						src={PlayIcon}
						width={100}
						height={100}
						onClick={() => setVideoMode(() => true)}
						className={`${styles.playIcon}`}
						alt='play icons'
					/>
					<img
						src={image}
						alt={title}
						width='100%'
						height='auto'
						className='object-fit-contain p-5'
					/>
				</div>
			)}

			{videoMode && (
				<div className='ratio ratio-21x9'>
					{video && (
						<VideoWrap
							className={`${styles.lessonVideo}`}
							autoplay={true}
							videoSources={videoSources}
							videoUrl={video.link || video.url}
							customPoster='https://storage.yandexcloud.net/matetech-dev-file-storage/46993/2345_35e67a2997506045008bedaf97e92064.jpg'
						/>
					)}
				</div>
			)}
		</div>
	);
};

export default LessonTop;
