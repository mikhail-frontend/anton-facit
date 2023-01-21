export const summaryPageTopMenu = {
	intro: { id: 'intro', text: 'Intro', path: '#intro', icon: 'Vrpano', subMenu: null },
	bootstrap: {
		id: 'bootstrap',
		text: 'Bootstrap Components',
		path: '#bootstrap',
		icon: 'BootstrapFill',
		subMenu: null,
	},
	storybook: {
		id: 'storybook',
		text: 'Storybook',
		path: '#storybook',
		icon: 'CustomStorybook',
		subMenu: null,
	},
	formik: {
		id: 'formik',
		text: 'Formik',
		path: '#formik',
		icon: 'CheckBox',
		subMenu: null,
	},
};

export const dashboardPagesMenu = {
	pages: {
		id: 'pages',
		text: 'Ready pages',
		icon: 'Extension',
	},
	dashboard: {
		id: 'dashboard',
		text: 'Profile',
		path: '/',
		icon: 'Badge',
		subMenu: null,
	},
	summary: {
		id: 'courses',
		text: 'Courses',
		path: '/courses',
		icon: 'sticky_note_2',
		subMenu: null,
	},
	login: {
		id: 'login',
		text: 'Login',
		path: '/login',
		icon: 'Login',
	},
	signUp: {
		id: 'signUp',
		text: 'Sign Up',
		path: '/sign-up',
		icon: 'PersonAdd',
	},
};

export const demoPagesMenu = {
	pages: {
		id: 'pages',
		text: 'Pages',
		icon: 'Extension',
	},

	singlePages: {
		id: 'singlePages',
		text: 'Single Pages',
		path: 'single-pages',
		icon: 'Article',
		subMenu: {
			fluidSingle: {
				id: 'fluidSingle',
				text: 'Fluid',
				path: 'single-pages/fluid',
				icon: 'ViewDay',
			},
		},
	},
	pricingTable: {
		id: 'pricingTable',
		text: 'Pricing Table',
		path: 'pricing-table',
		icon: 'Local Offer',
	},

	app: {
		id: 'app',
		text: 'Apps',
		icon: 'Extension',
	},

	knowledge: {
		id: 'knowledge',
		text: 'Knowledge',
		path: 'knowledge',
		icon: 'AutoStories',
		subMenu: {
			grid: {
				id: 'grid',
				text: 'Knowledge Grid',
				path: 'knowledge/grid',
				icon: 'AutoStories',
			},
			itemID: {
				id: 'itemID',
				text: 'itemID',
				path: 'knowledge/item',
				hide: true,
			},
			item: {
				id: 'item',
				text: 'Item',
				path: 'knowledge/item/1',
				icon: 'Book',
			},
		},
	},
	appointment: {
		id: 'appointment',
		text: 'Appointment',
		path: 'appointment',
		icon: 'Today',
		subMenu: {
			calendar: {
				id: 'calendar',
				text: 'Calendar',
				path: 'appointment/calendar',
				icon: 'EditCalendar',
				notification: true,
			},
			employeeList: {
				id: 'employeeList',
				text: 'Employee List',
				path: 'appointment/employee-list',
				icon: 'PersonSearch',
			},
			employeeID: {
				id: 'employeeID',
				text: 'employeeID',
				path: 'appointment/employee',
				hide: true,
			},
			employee: {
				id: 'employee',
				text: 'Employee',
				path: 'appointment/employee/1',
				icon: 'QrCode2',
			},
			appointmentList: {
				id: 'appointmentList',
				text: 'Appointment List',
				path: 'appointment/appointment-list',
				icon: 'Event',
			},
		},
	},



	auth: {
		id: 'auth',
		text: 'Auth Pages',
		icon: 'Extension',
	},
	login: {
		id: 'login',
		text: 'Login',
		path: '/login',
		icon: 'Login',
	},
	signUp: {
		id: 'signUp',
		text: 'Sign Up',
		path: '/sign-up',
		icon: 'PersonAdd',
	},
	page404: {
		id: 'Page404',
		text: '404 Page',
		path: 'auth-pages/404',
		icon: 'ReportGmailerrorred',
	},
};

export const gettingStartedPagesMenu = {
	gettingStarted: {
		id: 'gettingStarted',
		text: 'Getting Started',
		path: 'getting-started',
		icon: 'Book',
		subMenu: {
			installation: {
				id: 'installation',
				text: 'Installation',
				path: 'getting-started/installation',
				icon: 'BuildCircle',
			},
			dev: {
				id: 'dev',
				text: 'Development',
				path: 'getting-started/development',
				icon: 'DirectionsRun',
			},
			folderStructure: {
				id: 'folderStructure',
				text: 'Folder Structure',
				path: 'getting-started/folder-structure',
				icon: 'SnippetFolder',
			},
			bootstrapVariables: {
				id: 'bootstrapVariables',
				text: 'Bootstrap Variables',
				path: 'getting-started/bootstrap-variables',
				icon: 'SnippetFolder',
			},
			projectStructure: {
				id: 'projectStructure',
				text: 'Project Structure',
				path: 'getting-started/project-structure',
				icon: 'SnippetFolder',
			},
		},
	},
	routes: {
		id: 'routes',
		text: 'Routes & Pages',
		path: 'routes',
		icon: 'AltRoute',
		subMenu: {
			router: {
				id: 'router',
				text: 'Router',
				path: 'routes/router',
				icon: 'Router',
			},
		},
	},
};

export const productsExampleMenu = {
	companyA: { id: 'companyA', text: 'Company A', path: 'grid-pages/products', subMenu: null },
	companyB: { id: 'companyB', text: 'Company B', path: '/', subMenu: null },
	companyC: { id: 'companyC', text: 'Company C', path: '/', subMenu: null },
	companyD: { id: 'companyD', text: 'Company D', path: '/', subMenu: null },
};
