import React from 'react';
import { RouteProps } from 'react-router-dom';
import { demoPagesMenu, dashboardPagesMenu } from '../menu';
import DefaultAside from '../pages/_layout/_asides/DefaultAside';

const asides: RouteProps[] = [
	{ path: dashboardPagesMenu.login.path, element: null },
	{ path: demoPagesMenu.signUp.path, element: null },
	{ path: '*', element: <DefaultAside /> },
];

export default asides;
