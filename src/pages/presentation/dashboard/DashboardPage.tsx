import React, {useContext, useEffect} from 'react';
import {useTour} from '@reactour/tour';
import useDarkMode from '../../../hooks/useDarkMode';
import {demoPagesMenu} from '../../../menu';
import PageWrapper from '../../../layout/PageWrapper/PageWrapper';
import SubHeader, {SubHeaderLeft} from '../../../layout/SubHeader/SubHeader';
import Page from '../../../layout/Page/Page';
import ThemeContext from '../../../contexts/themeContext';

const DashboardPage = () => {
	const {mobileDesign} = useContext(ThemeContext);
	/**
	 * Tour Start
	 */
	const {setIsOpen} = useTour();
	useEffect(() => {
		if (localStorage.getItem('tourModalStarted') !== 'shown' && !mobileDesign) {
			setTimeout(() => {
				setIsOpen(true);
				localStorage.setItem('tourModalStarted', 'shown');
			}, 3000);
		}
		return () => {};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const { themeStatus } = useDarkMode();


	return (
		<PageWrapper title={demoPagesMenu.sales.subMenu.dashboard.text}>
			<SubHeader>
				<SubHeaderLeft>
					<span className='h4 mb-0 fw-bold'>Profile</span>
				</SubHeaderLeft>
			</SubHeader>
			<Page container='fluid'>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aperiam aut distinctio est facilis
				illum in, quas quis veritatis! Cumque exercitationem explicabo facilis fugiat, itaque labore laboriosam
				modi nostrum quia!
			</Page>
		</PageWrapper>
	);
};

export default DashboardPage;
