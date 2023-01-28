import React, { useMemo } from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import Comments from '../../CourseItem/components/Comments';
import VideoWrap from './VideoWrap';
import tmpVideo from '../entities/tmpVideo';

const LessonContent = () => {
	const { currentLesson } = useSelector((state: any) => state.lesson);
	if (!currentLesson) return <>No Lesson</>;

	// eslint-disable-next-line
	const video = useMemo(() => {
		// eslint-disable-next-line
		const parseVideoString = (video: string) => {
			const parsedVideo = JSON.parse(video);
			return Array.isArray(parsedVideo)
				? parsedVideo.length
					? parsedVideo[0]
					: {}
				: parsedVideo;
		};
		const rawVideo = parseVideoString(JSON.stringify(tmpVideo));
		if (rawVideo) return rawVideo;
		return null;
	}, []);

	// eslint-disable-next-line
	const videoSources = useMemo(() => {
		if (!video?.custom_properties || !Object.keys(video?.custom_properties)?.length)
			return null;
		return video?.custom_properties;
	}, [video]);

	return (
		<>
			<div className='display-4 fw-bold pt-3 pb-5'>{currentLesson.title}</div>
			<div className='row g-4'>
				<div className='col-12'>
					<div
						className={classNames(
							'ratio ratio-21x9',
							'rounded-2',
							'mb-3',
							'bg-l10-danger',
						)}>
						<img
							src={currentLesson?.image || ''}
							alt={currentLesson ? currentLesson.title : 'Lesson page'}
							width='100%'
							height='auto'
							className='object-fit-contain p-5'
						/>
					</div>
				</div>

				<div
					className='col-12 mb-4'
					dangerouslySetInnerHTML={{ __html: currentLesson.description }}
				/>

				{/*<video-player*/}
				{/*	v-if="video"*/}
				{/*:video-sources="videoSources"*/}
				{/*:video-url="video.link || video.url"*/}
				{/*custom-poster="https://storage.yandexcloud.net/matetech-dev-file-storage/46993/2345_35e67a2997506045008bedaf97e92064.jpg"*/}
				{/*/>*/}

				{video && (
					<VideoWrap
						videoSources={videoSources}
						videoUrl={video.link || video.url}
						customPoster='https://storage.yandexcloud.net/matetech-dev-file-storage/46993/2345_35e67a2997506045008bedaf97e92064.jpg'
					/>
				)}
			</div>

			<Comments />
		</>
	);
};

export default LessonContent;
