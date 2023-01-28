import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Comments from '../../CourseItem/components/Comments';
import LessonTop from './LessonTop';
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
				<LessonTop
					title={currentLesson.title || 'Lesson page'}
					image={currentLesson.image || ''}
					video={video}
					videoSources={videoSources}
				/>

				<div
					className='col-12 mb-4'
					dangerouslySetInnerHTML={{ __html: currentLesson.description }}
				/>
			</div>

			<Comments />
		</>
	);
};

export default LessonContent;
