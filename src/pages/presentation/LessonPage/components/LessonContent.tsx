import React from 'react';
import classNames from 'classnames';
import {useSelector} from 'react-redux';
import Comments from '../../CourseItem/components/Comments';

const LessonContent = () => {
    const {currentLesson} = useSelector((state: any) => state.lesson);
    if (!currentLesson) return <>No Lesson</>;




    return (
        <>
            <div className='display-4 fw-bold pt-3 pb-5'>
                {currentLesson.title}
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
                            src={currentLesson?.image || ''}
                            alt={currentLesson ? currentLesson.title : 'Lesson page'}
                            width='100%'
                            height='auto'
                            className='object-fit-contain p-5'
                        />
                    </div>
                </div>

                <div className='col-12 mb-4' dangerouslySetInnerHTML={{__html: currentLesson.description}}/>
            </div>

            <Comments/>
        </>
    );
};


export default LessonContent;
