import React from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import type { IItemProps } from './CourseLesson';
import CourseLesson from './CourseLesson';
import Comments from './Comments';
type CurrentCourseType = {
	id: number;
	title: string;
	image: string;
	text: string;
	lessons: IItemProps[];
};

type CourseContentType = {
	showLessons?: boolean;
};
const CourseContent: React.FC<CourseContentType> = ({ showLessons }) => {
	const currentCourse: CurrentCourseType = useSelector(
		(state: any) => state.courseItem.currentCourse,
	);

	return (
		<>
			<div className='display-4 fw-bold pt-3 pb-5'>
				{currentCourse ? currentCourse.title : 'Course page'}
			</div>
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
							src={currentCourse?.image || ''}
							alt={currentCourse ? currentCourse.title : 'Course page'}
							width='100%'
							height='auto'
							className='object-fit-contain p-5'
						/>
					</div>
				</div>

				<div className='col-12' dangerouslySetInnerHTML={{ __html: currentCourse.text }} />
			</div>

			{showLessons && (
				<div className='row mb-5'>
					<div className='col-12'>
						<h2 className='mt-4 mb-2'>Course lessons</h2>
					</div>
					{currentCourse.lessons.map((lesson) => {
						return (
							<CourseLesson
								key={lesson.id}
								id={lesson.id}
								title={lesson.title || 'No title'}
								color={lesson.color || 'primary'}
								description={lesson.description || ''}
								image={lesson.image || ''}
								tags={lesson.tags || []}
							/>
						);
					})}
				</div>
			)}
			<Comments />
		</>
	);
};

CourseContent.defaultProps = {
	showLessons: true,
};

export default CourseContent;
