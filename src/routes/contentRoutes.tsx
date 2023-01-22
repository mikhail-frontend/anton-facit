import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu } from '../menu';
import Login from '../pages/presentation/Auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/presentation/Profile/Profile')),
	SUMMARY: lazy(() => import('../pages/presentation/CoursesList/Courses')),
	COURSE_ITEM: lazy(() => import('../pages/presentation/CourseItem/CourseItem')),
};



const presentation: RouteProps[] = [
	/**
	 * Landing
	 */
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
