import React, { Dispatch, useEffect, useMemo } from 'react';
import SubHeader, { SubHeaderLeft, SubheaderSeparator } from '../../../layout/SubHeader/SubHeader';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import Page from '../../../layout/Page/Page';
import Button from '../../../components/bootstrap/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from '../CoursesList/components/Loading';

const CourseItem = () => {
    const navigate = useNavigate();
    const { courseId, lessonId } = useParams();
    const loading = true;




    // useEffect(() => {
    //     if (!currentCourse) {
    //         navigate('/404');
    //     }
    //     return () => {};
    //     //eslint-disable-next-line
    // }, [currentCourse]);

///    if (!currentCourse) return <></>;

    return (
        <PageWrapper title={'Lesson Page'}>
            <SubHeader>
                <SubHeaderLeft>
                    <Button
                        color='info'
                        isLink
                        icon='ArrowBack'
                        onClick={() => navigate('/courses')}>
                        Back to List
                    </Button>
                    <SubheaderSeparator />
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
