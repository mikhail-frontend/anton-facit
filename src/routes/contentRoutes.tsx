import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu, demoPagesMenu } from '../menu';
import Login from '../pages/presentation/Auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/presentation/Profile/Profile')),
	SUMMARY: lazy(() => import('../pages/presentation/CoursesList/Courses')),
};

const APP = {
	KNOWLEDGE: {
		GRID: lazy(() => import('../pages/presentation/knowledge/KnowledgeGridPage')),
		VIEW: lazy(() => import('../pages/presentation/knowledge/KnowledgeViewPage')),
	},
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
	/** ************************************************** */

	{
		path: dashboardPagesMenu.login.path,
		element: <Login />,
	},
	{
		path: dashboardPagesMenu.signUp.path,
		element: <Login isSignUp />,
	},

	/**
	 * App > Knowledge
	 */
	{
		path: demoPagesMenu.knowledge.subMenu.grid.path,
		element: <APP.KNOWLEDGE.GRID />,
	},
	{
		path: `${demoPagesMenu.knowledge.subMenu.itemID.path}/:id`,
		element: <APP.KNOWLEDGE.VIEW />,
	},

	/**
	 * END - App
	 */

	/** ************************************************** */
];

const contents = [...presentation];

export default contents;
