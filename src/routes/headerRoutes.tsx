import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu } from '../menu';
// import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';

const headers: RouteProps[] = [
	{ path: dashboardPagesMenu.login.path, element: null },
	{ path: dashboardPagesMenu.signUp.path, element: null },
	{ path: dashboardPagesMenu.dashboard.path, element: null },
	{
		path: `*`,
		element: null,
	},
];

export default headers;
