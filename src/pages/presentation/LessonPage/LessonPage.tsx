import React, {Dispatch, useEffect, useMemo, useState} from 'react';
import SubHeader, {SubHeaderLeft, SubheaderSeparator} from '../../../layout/SubHeader/SubHeader';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
//import Button from '../../../components/bootstrap/Button';
import {useNavigate, useParams} from 'react-router-dom';
//import { useSelector, useDispatch } from 'react-redux';
import Breadcrumb from "../../../components/bootstrap/Breadcrumb";
import Loading from '../CoursesList/components/Loading';
import type {CurrentCourseType} from '../CourseItem/components/CourseContent'
import {useSelector} from "react-redux";

const CourseItem = () => {
    const navigate = useNavigate();
    const {courseId, lessonId} = useParams();
    const currentCourse: CurrentCourseType = useSelector(
        (state: any) => state.courseItem.currentCourse,
    );
    const currentLesson = currentCourse.lessons.find(({id}) => Number(id) === Number(lessonId))
    const [breadcrumbs, setBreadcrumbs] = useState([
        {title: 'Courses', to: '/courses'},
        {title: currentCourse.title, to: `/courses/course/${courseId}`},
        {title: currentLesson.title, to: `/courses/course/${courseId}/lesson/${lessonId}`}
    ])


    useEffect(() => {
        if (!currentCourse || !currentLesson) {
            navigate('/404');
        }
        return () => {
        };
        //eslint-disable-next-line
    }, [currentCourse, currentLesson]);

    if (!currentCourse || !currentLesson) return <></>;

    const loading = true;


    return (
        <PageWrapper title={'Lesson Page'}>
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
                {loading && <Loading text={`We're loading your lesson`}/>}
                {/*{!courseItemLoading && <CourseContent />}*/}
            </Page>
        </PageWrapper>
    );
};

export default CourseItem;
