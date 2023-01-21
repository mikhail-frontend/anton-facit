import React from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu, demoPagesMenu, gettingStartedPagesMenu } from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';
import DashboardBookingHeader from '../pages/_layout/_headers/DashboardBookingHeader';
import ProfilePageHeader from '../pages/_layout/_headers/ProfilePageHeader';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';
import DocumentationHeader from '../pages/_layout/_headers/DocumentationHeader';

const headers: RouteProps[] = [
	{ path: demoPagesMenu.login.path, element: null },
	{ path: demoPagesMenu.signUp.path, element: null },
	{ path: demoPagesMenu.page404.path, element: null },
	{ path: demoPagesMenu.knowledge.subMenu.grid.path, element: null },
	{ path: dashboardPagesMenu.dashboard.path, element: <DashboardHeader /> },

	{ path: demoPagesMenu.pricingTable.path, element: <DashboardHeader /> },

	{
		path: demoPagesMenu.appointment.subMenu.calendar.path,
		element: <DashboardBookingHeader />,
	},
	{
		path: demoPagesMenu.appointment.subMenu.employeeList.path,
		element: <DashboardBookingHeader />,
	},

	{
		path: `${demoPagesMenu.appointment.subMenu.employeeID.path}/*`,
		element: <DashboardBookingHeader />,
	},

	{
		path: demoPagesMenu.singlePages.subMenu.fluidSingle.path,
		element: <ProfilePageHeader />,
	},

	{
		path: demoPagesMenu.chat.subMenu.withListChat.path,
		element: <ProfilePageHeader />,
	},
	{
		path: demoPagesMenu.chat.subMenu.onlyListChat.path,
		element: <ProfilePageHeader />,
	},
	{
		path: `${demoPagesMenu.knowledge.subMenu.itemID.path}/:id`,
		element: <ProfilePageHeader />,
	},
	{
		path: `${gettingStartedPagesMenu.gettingStarted.path}/*`,
		element: <DocumentationHeader />,
	},
	{
		path: `${gettingStartedPagesMenu.routes.path}/*`,
		element: <DocumentationHeader />,
	},
	{
		path: `*`,
		element: <DefaultHeader />,
	},
];

export default headers;
