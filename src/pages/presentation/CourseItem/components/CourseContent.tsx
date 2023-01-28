import React from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import type {IItemProps} from './CourseLesson';
import CourseLesson from './CourseLesson';
import Comments from './Comments';
import styles from './CourseContent.module.scss'
import {Link, useParams} from "react-router-dom";

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
const CourseContent: React.FC<CourseContentType> = ({showLessons}) => {
    const currentCourse: CurrentCourseType = useSelector(
        (state: any) => state.courseItem.currentCourse,
    );

    const {courseId} = useParams();

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

                <div className='col-12' dangerouslySetInnerHTML={{__html: currentCourse.text}}/>
            </div>

            {showLessons && (
                <div className='row mb-5'>
                    <div className='col-12'>
                        <h2 className='mt-4 mb-2'>Course lessons</h2>
                    </div>
                    <div className='row mb-5'>
                        {currentCourse.lessons.map((lesson) => {
                            return (
                                <Link key={lesson.id}
                                      className={`${styles.courseLink} col-xl-3 col-lg-4 col-md-6`}
                                      to={`/courses/course/${courseId}/lesson/${lesson.id}`}>
                                    <CourseLesson
                                        id={lesson.id}
                                        title={lesson.title || 'No title'}
                                        color={lesson.color || 'primary'}
                                        description={lesson.description || ''}
                                        image={lesson.image || ''}
                                        tags={lesson.tags || []}
                                    />
                                </Link>
                            );
                        })}
                    </div>
                </div>
            )}
            <Comments/>
        </>
    );
};

CourseContent.defaultProps = {
    showLessons: true,
};

export default CourseContent;
