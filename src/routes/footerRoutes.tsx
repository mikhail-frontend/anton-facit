import React from 'react';
import { RouteProps } from 'react-router-dom';
import { demoPagesMenu, dashboardPagesMenu } from '../menu';
import DefaultFooter from '../pages/_layout/_footers/DefaultFooter';

const footers: RouteProps[] = [
	{ path: dashboardPagesMenu.login.path, element: null },
	{ path: dashboardPagesMenu.signUp.path, element: null },
	{ path: demoPagesMenu.knowledge.subMenu.grid.path, element: null },
	{ path: '*', element: <DefaultFooter /> },
];

export default footers;
