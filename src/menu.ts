export const dashboardPagesMenu = {
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
		icon: 'Anchor',
		subMenu: null,
	},
	notifications: {
		id: 'notifications',
		text: 'Notifications',
		icon: 'Notifications',
		path: '/',
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
};
