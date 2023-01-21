import React from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu, demoPagesMenu, gettingStartedPagesMenu } from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';
import ProfilePageHeader from '../pages/_layout/_headers/ProfilePageHeader';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

const headers: RouteProps[] = [
	{ path: demoPagesMenu.login.path, element: null },
	{ path: demoPagesMenu.signUp.path, element: null },
	{ path: demoPagesMenu.page404.path, element: null },
	{ path: demoPagesMenu.knowledge.subMenu.grid.path, element: null },
	{ path: dashboardPagesMenu.dashboard.path, element: <DashboardHeader /> },

	{
		path: demoPagesMenu.singlePages.subMenu.fluidSingle.path,
		element: <ProfilePageHeader />,
	},
	{
		path: `${demoPagesMenu.knowledge.subMenu.itemID.path}/:id`,
		element: <ProfilePageHeader />,
	},

	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
