import React, {Dispatch, useEffect, useMemo, useState} from 'react';
import SubHeader, {SubHeaderLeft, SubheaderSeparator} from '../../../layout/SubHeader/SubHeader';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
//import Button from '../../../components/bootstrap/Button';
import {useNavigate, useParams} from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';
import Breadcrumb from "../../../components/bootstrap/Breadcrumb";
import Loading from '../CoursesList/components/Loading';
import type {CurrentCourseType} from '../CourseItem/components/CourseContent';
import {getLesson} from "../../../store/modules/lesson/lessonActions";
import {useSelector, useDispatch} from "react-redux";

const LessonPage = () => {
    const navigate = useNavigate();
    const {courseId, lessonId} = useParams();
    const dispatch: Dispatch<any> = useDispatch();
    const {currentLesson, lessonLoading} = useSelector((state:any) => state.lesson);

    const [breadcrumbs, setBreadcrumbs] = useState([
        {title: 'Courses', to: '/courses'},
        {title: 'Course Page', to: `/courses/course/${courseId}`},
        {title: 'Lesson Page', to: `/courses/course/${courseId}/lesson/${lessonId}`}
    ]);

    useEffect(() => {
        //eslint-disable-next-line
        (async () => {
            const response:any=  await dispatch(getLesson({
                course_id: Number(courseId),
                lesson_id: Number(lessonId)
            }))
            const {course, lesson} = response;
            if(!course || !lesson) {
                navigate('/404');
            }
            setBreadcrumbs(() => {
                return [
                    {title: 'Courses', to: '/courses'},
                    {title: course.title, to: `/courses/course/${courseId}`},
                    {title: lesson.title, to: `/courses/course/${courseId}/lesson/${lessonId}`}
                ]
            })
        })();

        return () => {}

    }, [courseId, lessonId, dispatch])


    return (
        <PageWrapper title={currentLesson ? currentLesson.title : 'Lesson Page'}>
            <SubHeader>
                <SubHeaderLeft>
                    <Breadcrumb
                        list={breadcrumbs}
                        tag='nav'
                        listTag='ul'
                        itemTag='li'
                    />
                    <SubheaderSeparator/>
                </SubHeaderLeft>
            </SubHeader>
            <Page>
                {lessonLoading && <Loading text={`We're loading your lesson`}/>}
                {/*{!courseItemLoading && <CourseContent />}*/}
            </Page>
        </PageWrapper>
    );
};

export default LessonPage;
