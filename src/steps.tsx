import React from 'react';
import { useTour } from '@reactour/tour';
import { createUseStyles } from 'react-jss';
import SusyDarkMode from './assets/img/wanna/susy/susy-dark-mode.png';
import Susy2 from './assets/img/wanna/susy/susy2.png';
import Susy3 from './assets/img/wanna/susy/susy3.png';
import Susy4 from './assets/img/wanna/susy/susy4.png';
import Susy5 from './assets/img/wanna/susy/susy5.png';
import Susy6 from './assets/img/wanna/susy/susy6.png';
import Susy7 from './assets/img/wanna/susy/susy7.png';
import Susy8 from './assets/img/wanna/susy/susy8.png';
import Susy10 from './assets/img/wanna/susy/susy10.png';
import useDarkMode from './hooks/useDarkMode';
import Button from './components/bootstrap/Button';

/**
 * Steps style
 */
export const styles = {
	/**
	 * Overlay style
	 * @param base
	 */
	maskWrapper: (base: any) => ({ ...base }),
	maskArea: (base: any) => ({
		...base,
		rx: 'var(--bs-border-radius)',
	}),
	highlightedArea: (base: any) => ({ ...base }),
	badge: (base: any) => ({ ...base }),
	popover: (base: any) => ({
		...base,
		boxShadow: '0 0 3em rgba(0, 0, 0, 0.5)',
		backgroundColor: 'var(--bs-body-bg)',
		color: 'var(--bs-body-color)',
		borderRadius: 'var(--bs-border-radius)',
	}),
};

/**
 * Image Styles
 * @type {(data?: {theme?: DefaultTheme}) => Classes<"image">}
 */
const useStyles = createUseStyles({
	image: {
		maxHeight: '150px',
		objectFit: 'contain',
	},
});

/**
 * Prev & Next buttons
 * @returns {JSX.Element}
 * @constructor
 */
const TourNavigation = () => {
	const { currentStep, setCurrentStep } = useTour();
	return (
		<div className='col-12 mt-3'>
			<div className='row'>
				<div className='col'>
					{!!currentStep && (
						<Button
							icon='ArrowBackIos'
							color='info'
							isLink
							onClick={() => setCurrentStep(currentStep - 1)}>
							Prev
						</Button>
					)}
				</div>
				<div className='col-auto'>
					<Button
						icon='ArrowForwardIos'
						color='info'
						isLight
						onClick={() => setCurrentStep(currentStep + 1)}>
						Next
					</Button>
				</div>
			</div>
		</div>
	);
};

/**
 * Selector
 * @param name
 * @returns {`[data-tour='${string}']`}
 */
const getTargetName = (name: string): `[data-tour='${string}']` => {
	return `[data-tour='${name}']`;
};

const DarkModeTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-5'>
				<img src={SusyDarkMode} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-7 d-flex align-items-center'>
				<div>
					<p className='lead'>Dark / Light Mode</p>
					<p>You can switch between dark and light mode.</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const LangSwitcherTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy2} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Language Switcher</p>
					<p>
						"react-i18next" is integrated for internationalization. Currently in demo,
						it is prepared only for <code>Aside</code>, you can easily use it in your
						project.
					</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const SearchTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy7} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Search</p>
					<p>You can set it to search for what you want with the search bar.</p>
					<ol>
						<li>
							Let's search for the word <b>"Card"</b> as an example.
						</li>
						<li>
							Then click on the word <b>"Card"</b> from the results.
						</li>
					</ol>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const DateRangeTour = () => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();
	const classes = useStyles();

	return (
		<div className='row'>
			<div className='col-md-8 flex-wrap d-flex align-items-center'>
				<div className='row'>
					<div className='col'>
						<p className='lead'>Compatibility</p>
						<p>The designs of the added packages are compatible with "Facit".</p>
						<p>
							After clicking the <b>date button</b> above, you can test its appearance
							with the buttons below.
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col'>
						<Button
							icon='Sun'
							color='warning'
							isLight={darkModeStatus}
							onClick={() => setDarkModeStatus(false)}>
							Light
						</Button>
					</div>
					<div className='col-auto'>
						<Button
							icon='Moon'
							color='info'
							isLight={!darkModeStatus}
							onClick={() => setDarkModeStatus(true)}>
							Dark
						</Button>
					</div>
				</div>
			</div>
			<div className='col-md-4'>
				<img src={Susy3} className={classes.image} width='100%' alt='' />
			</div>
			<TourNavigation />
		</div>
	);
};

const FilterTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Well thought out page structure</p>
					<p>
						Since the "Subheader" is in the same file as the page content, you can
						easily use the relevant components here.
					</p>
				</div>
			</div>
			<div className='col-md-4'>
				<img src={Susy3} className={classes.image} width='100%' alt='' />
			</div>
			<TourNavigation />
		</div>
	);
};

const ListTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy8} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Table & Table Hooks</p>
					<p>With hooks written specifically for tables;</p>
					<ul>
						<li>Select row and select all,</li>
						<li>Cell customization,</li>
						<li>Sorting according to the desired value in the cell,</li>
						<li>Paging and number of items on the page</li>
						<li>and more...</li>
					</ul>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const EditPageTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy6} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Edit Pages</p>
					<p>
						You can use your forms in different ways such as <b>modal</b>, <b>canvas</b>{' '}
						and <b>wizard</b> according to your needs.
					</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const AuthPageTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy4} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Auth Pages</p>
					<p>You can see the authorization sample pages here.</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const ProjectsTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Team and Project Homepage</p>
					<p>
						<b>Click</b> on a project to see the inside page.
					</p>
				</div>
			</div>
		</div>
	);
};

const ProjectItemTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy5} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Board & Task Page</p>
					<p>
						<b>Click</b> on the title of a task on the board to see detailed
						information.
					</p>
				</div>
			</div>
			<TourNavigation />
		</div>
	);
};

const KnowledgeTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy8} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Knowledge</p>
					<p>Open the menu and click "Knowledge Grid"</p>
				</div>
			</div>
		</div>
	);
};

const KnowledgeItemTour = () => {
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy7} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Knowledge Item</p>
					<p>
						After using the above filtering, you can click on the item and view its
						detailed information.
					</p>
				</div>
			</div>
		</div>
	);
};



const LastTour = () => {
	const { setIsOpen, setCurrentStep } = useTour();
	const classes = useStyles();
	return (
		<div className='row'>
			<div className='col-md-4'>
				<img src={Susy10} className={classes.image} width='100%' alt='' />
			</div>
			<div className='col-md-8 d-flex align-items-center'>
				<div>
					<p className='lead'>Thank you for following me!</p>
					<p>I know it is very long, but I have actually presented very little of it.</p>
					<p>You can always contact us after purchasing.</p>
				</div>
			</div>
			<div className='col-12 mt-3'>
				<div className='row'>
					<div className='col-12'>
						<p>- What would you like to do now?</p>
					</div>
					<div className='col'>
						<Button
							icon='Close'
							color='danger'
							isLink
							onClick={() => {
								setIsOpen(false);
								setCurrentStep(0);
							}}>
							Close
						</Button>
					</div>
					<div className='col-auto'>
						<Button
							icon='Shopping Cart'
							color='success'
							isLight
							tag='a'
							href='https://1.envato.market/facit-preview'>
							Buy Now
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

/**
 * Tour Steps
 */
const steps = [
	/**
	 * Dark Mode
	 * @step 0
	 */
	{
		selector: getTargetName('dark-mode'),
		content: () => <DarkModeTour />,
	},
	/**
	 * Lang Selector
	 * @step 1
	 */
	{
		selector: getTargetName('lang-selector'),
		content: () => <LangSwitcherTour />,
		highlightedSelectors: [getTargetName('lang-selector-menu')],
		mutationObservables: [getTargetName('lang-selector-menu')],
		resizeObservables: [getTargetName('lang-selector-menu')],
	},
	/**
	 * Search
	 * @step 2
	 */
	{
		selector: getTargetName('search'),
		content: () => <SearchTour />,
		highlightedSelectors: [getTargetName('search-modal'), getTargetName('card')],
		mutationObservables: [getTargetName('search-modal'), getTargetName('card')],
		resizeObservables: [getTargetName('search-modal'), getTargetName('card')],
	},

	/**
	 * Date Range
	 * @step 4
	 */
	{
		selector: getTargetName('date-range'),
		content: () => <DateRangeTour />,
		highlightedSelectors: [getTargetName('date-range-menu')],
		mutationObservables: [getTargetName('date-range-menu')],
		resizeObservables: [getTargetName('date-range-menu')],
	},
	/**
	 * List Page
	 * @step 5
	 */

	/**
	 * Filter
	 * @step 6
	 */
	{
		selector: getTargetName('filter'),
		content: () => <FilterTour />,
		highlightedSelectors: [getTargetName('filter-menu')],
		mutationObservables: [getTargetName('filter-menu')],
		resizeObservables: [getTargetName('filter-menu')],
	},
	/**
	 * List
	 * @step 7
	 */
	{
		selector: getTargetName('list'),
		content: () => <ListTour />,
		highlightedSelectors: [getTargetName('list')],
		mutationObservables: [getTargetName('list')],
		resizeObservables: [getTargetName('list')],
	},

	/**
	 * Edit Page
	 * @step 9
	 */
	{
		selector: '#aside-demo-pages__editPages--link',
		content: () => <EditPageTour />,
		highlightedSelectors: ['#aside-demo-pages__editPages'],
		mutationObservables: ['#aside-demo-pages__editPages'],
		resizeObservables: ['#aside-demo-pages__editPages'],
	},
	/**
	 * Auth Page
	 * @step 10
	 */
	{
		selector: '[href="/auth-pages/login"]',
		content: () => <AuthPageTour />,
		highlightedSelectors: [
			'[href="/auth-pages/login"]',
			'[href="/auth-pages/sign-up"]',
			'[href="/auth-pages/404"]',
			getTargetName('login-page'),
		],
		mutationObservables: [
			'[href="/auth-pages/login"]',
			'[href="/auth-pages/sign-up"]',
			'[href="/auth-pages/404"]',
			getTargetName('login-page'),
		],
		resizeObservables: [
			'[href="/auth-pages/login"]',
			'[href="/auth-pages/sign-up"]',
			'[href="/auth-pages/404"]',
			getTargetName('login-page'),
		],
	},

	/**
	 * Projects
	 * @step 12
	 */
	{
		selector: getTargetName('project-item'),
		content: () => <ProjectsTour />,
		highlightedSelectors: [getTargetName('project-item')],
		mutationObservables: [getTargetName('project-item')],
		resizeObservables: [getTargetName('project-item')],
	},
	/**
	 * Project Item
	 * @step 13
	 */
	{
		selector: getTargetName('Mail App'),
		content: () => <ProjectItemTour />,
		highlightedSelectors: [getTargetName('Mail App'), getTargetName('mail-app-modal')],
		mutationObservables: [getTargetName('Mail App'), getTargetName('mail-app-modal')],
		resizeObservables: [getTargetName('Mail App'), getTargetName('mail-app-modal')],
	},
	/**
	 * Knowledge
	 * @step 14
	 */
	{
		selector: '#aside-demo-pages__knowledge--link',
		content: () => <KnowledgeTour />,
		highlightedSelectors: ['#aside-demo-pages__knowledge'],
		mutationObservables: ['#aside-demo-pages__knowledge'],
		resizeObservables: ['#aside-demo-pages__knowledge'],
	},
	/**
	 * Knowledge Item
	 * @step 15
	 */
	{
		selector: getTargetName('Background'),
		content: () => <KnowledgeItemTour />,
		highlightedSelectors: [getTargetName('Background'), getTargetName('knowledge-filter')],
		mutationObservables: [getTargetName('Background')],
		resizeObservables: [getTargetName('Background')],
	},

	/**
	 * Last
	 * @step 22
	 */
	{
		selector: 'body',
		content: () => <LastTour />,
	},
];

export default steps;
