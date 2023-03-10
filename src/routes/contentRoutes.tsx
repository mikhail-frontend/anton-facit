import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu } from '../menu';
import Login from '../pages/presentation/Auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/presentation/Profile/Profile')),
	SUMMARY: lazy(() => import('../pages/presentation/CoursesList/Courses')),
	COURSE_ITEM: lazy(() => import('../pages/presentation/CourseItem/CourseItem')),
	LESSON_PAGE: lazy(() => import('../pages/presentation/LessonPage/LessonPage')),
};

const presentation: RouteProps[] = [
	{
		path: dashboardPagesMenu.dashboard.path,
		element: <LANDING.DASHBOARD />,
	},
	{
		path: dashboardPagesMenu.summary.path,
		element: <LANDING.SUMMARY />,
	},
	{
		path: `/courses/course/:courseId`,
		element: <LANDING.COURSE_ITEM />,
	},
	{
		path: `/courses/course/:courseId/lesson/:lessonId`,
		element: <LANDING.LESSON_PAGE />,
	},
	/** ************************************************** */

	{
		path: dashboardPagesMenu.login.path,
		element: <Login />,
	},
	{
		path: dashboardPagesMenu.signUp.path,
		element: <Login isSignUp />,
	},
];

const contents = [...presentation];

export default contents;
