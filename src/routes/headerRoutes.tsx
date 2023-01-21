import React from 'react';
import { RouteProps } from 'react-router-dom';
import { dashboardPagesMenu, demoPagesMenu, gettingStartedPagesMenu } from '../menu';
import DashboardHeader from '../pages/_layout/_headers/DashboardHeader';
import DashboardBookingHeader from '../pages/_layout/_headers/DashboardBookingHeader';
import ProfilePageHeader from '../pages/_layout/_headers/ProfilePageHeader';
import ProductsHeader from '../pages/_layout/_headers/ProductsHeader';
import ProductListHeader from '../pages/_layout/_headers/ProductListHeader';
import DefaultHeader from '../pages/_layout/_headers/DefaultHeader';
import DocumentationHeader from '../pages/_layout/_headers/DocumentationHeader';

const headers: RouteProps[] = [
	{ path: demoPagesMenu.login.path, element: null },
	{ path: demoPagesMenu.signUp.path, element: null },
	{ path: demoPagesMenu.page404.path, element: null },
	{ path: demoPagesMenu.knowledge.subMenu.grid.path, element: null },
	{ path: dashboardPagesMenu.dashboard.path, element: <DashboardHeader /> },
	{
		path: demoPagesMenu.projectManagement.subMenu.list.path,
		element: <DashboardHeader />,
	},
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
		path: demoPagesMenu.listPages.subMenu.listFluid.path,
		element: <DashboardBookingHeader />,
	},
	{
		path: `${demoPagesMenu.editPages.path}/*`,
		element: <DashboardBookingHeader />,
	},
	{
		path: `${demoPagesMenu.appointment.subMenu.employeeID.path}/*`,
		element: <DashboardBookingHeader />,
	},
	{
		path: `${demoPagesMenu.projectManagement.subMenu.itemID.path}/*`,
		element: <DashboardBookingHeader />,
	},
	{
		path: demoPagesMenu.singlePages.subMenu.fluidSingle.path,
		element: <ProfilePageHeader />,
	},
	{
		path: demoPagesMenu.singlePages.subMenu.boxedSingle.path,
		element: <ProfilePageHeader />,
	},
	{
		path: demoPagesMenu.sales.subMenu.transactions.path,
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
		path: demoPagesMenu.crm.subMenu.dashboard.path,
		element: <ProfilePageHeader />,
	},
	{
		path: demoPagesMenu.crm.subMenu.customersList.path,
		element: <ProfilePageHeader />,
	},
	{
		path: `${demoPagesMenu.crm.subMenu.customerID.path}/:id`,
		element: <ProfilePageHeader />,
	},

	{
		path: demoPagesMenu.gridPages.subMenu.gridBoxed.path,
		element: <ProductsHeader />,
	},
	{
		path: demoPagesMenu.gridPages.subMenu.gridFluid.path,
		element: <ProductsHeader />,
	},
	{
		path: demoPagesMenu.listPages.subMenu.listBoxed.path,
		element: <ProductListHeader />,
	},
	{
		path: demoPagesMenu.sales.subMenu.salesList.path,
		element: <ProductListHeader />,
	},
	{
		path: demoPagesMenu.sales.subMenu.productsGrid.path,
		element: <ProductListHeader />,
	},
	{
		path: `${demoPagesMenu.sales.subMenu.productID.path}/:id`,
		element: <ProductListHeader />,
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
