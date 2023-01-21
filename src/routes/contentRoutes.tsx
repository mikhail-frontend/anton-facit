import React, { lazy } from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu, demoPagesMenu, gettingStartedPagesMenu } from '../menu';
import Login from '../pages/presentation/auth/Login';

const LANDING = {
	DASHBOARD: lazy(() => import('../pages/presentation/Profile/DashboardPage')),
	SUMMARY: lazy(() => import('../pages/presentation/CoursesList/Courses')),
};
const SINGLE = {
	FLUID: lazy(() => import('../pages/presentation/single-pages/SingleFluidPage')),
};

const PRICING = {
	PRICING_TABLE: lazy(() => import('../pages/presentation/pricing/PricingTablePage')),
};

const AUTH = {
	PAGE_404: lazy(() => import('../pages/presentation/auth/Page404')),
};
const APP = {
	KNOWLEDGE: {
		GRID: lazy(() => import('../pages/presentation/knowledge/KnowledgeGridPage')),
		VIEW: lazy(() => import('../pages/presentation/knowledge/KnowledgeViewPage')),
	},
};

const GETTING_STARTED = {
	INSTALLATION: lazy(() => import('../pages/documentation/getting-started/InstallationPage')),
	DEVELOPMENT: lazy(() => import('../pages/documentation/getting-started/DevelopmentPage')),
	FOLDER: lazy(() => import('../pages/documentation/getting-started/FolderStructurePage')),
	BOOTSTRAP: lazy(() => import('../pages/documentation/getting-started/BootstrapVariablesPage')),
	PROJECT: lazy(() => import('../pages/documentation/getting-started/ProjectStructurePage')),
};
const ROUTES = {
	ROUTER: lazy(() => import('../pages/documentation/routes/RouterPage')),
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
		path: demoPagesMenu.singlePages.subMenu.fluidSingle.path,
		element: <SINGLE.FLUID />,
	},

	{
		path: demoPagesMenu.pricingTable.path,
		element: <PRICING.PRICING_TABLE />,
	},

	/**
	 * END - Pages
	 */

	/**
	 * Auth Page
	 */
	{
		path: demoPagesMenu.page404.path,
		element: <AUTH.PAGE_404 />,
	},
	{
		path: demoPagesMenu.login.path,
		element: <Login />,
	},
	{
		path: demoPagesMenu.signUp.path,
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
const documentation: RouteProps[] = [
	/**
	 * Getting Started
	 */
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.installation.path,
		element: <GETTING_STARTED.INSTALLATION />,
	},
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.dev.path,
		element: <GETTING_STARTED.DEVELOPMENT />,
	},
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.folderStructure.path,
		element: <GETTING_STARTED.FOLDER />,
	},
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.bootstrapVariables.path,
		element: <GETTING_STARTED.BOOTSTRAP />,
	},
	{
		path: gettingStartedPagesMenu.gettingStarted.subMenu.projectStructure.path,
		element: <GETTING_STARTED.PROJECT />,
	},
	/**
	 * Routes
	 */
	{
		path: gettingStartedPagesMenu.routes.subMenu.router.path,
		element: <ROUTES.ROUTER />,
	},
];
const contents = [...presentation, ...documentation];

export default contents;
