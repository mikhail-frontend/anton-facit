import React, { FC, ReactNode, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { DropdownItem, DropdownMenu } from '../../components/bootstrap/Dropdown';
import Button from '../../components/bootstrap/Button';
import useDarkMode from '../../hooks/useDarkMode';
import Collapse from '../../components/bootstrap/Collapse';
import Navigation, { NavigationLine } from '../Navigation/Navigation';
import Icon from '../../components/icon/Icon';
import useNavigationItemHandle from '../../hooks/useNavigationItemHandle';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../store/modules/user/userActions';
import ChangeLang from '../../pages/_layout/_headers/ChangeLang';
import UserImage4 from '../../assets/img/wanna/wanna4.png';
import { INNER } from '../Navigation/Item';
import { HeaderOffCanvas } from '../../pages/_layout/_headers/CommonHeaderRight';
import { dashboardPagesMenu } from '../../menu';

interface IAsideFootProps {
	children: ReactNode;
}

interface IAsideFootProps {
	children: ReactNode;
}

export const AsideFoot: FC<IAsideFootProps> = ({ children }) => {
	return <div className='aside-foot'>{children}</div>;
};

const Notifications = () => {
	const [offcanvasStatus, setOffcanvasStatus] = useState(false);
	const { t } = useTranslation('menu');
	const LINK_CLASS = classNames('navigation-link', 'navigation-link-pill');

	return (
		<>
			<HeaderOffCanvas
				setOffcanvasStatus={setOffcanvasStatus}
				offcanvasStatus={offcanvasStatus}
			/>
			<div
				// @ts-ignore
				className={classNames(LINK_CLASS, ({ isActive }) => (isActive ? 'active' : ''))}
				onClick={(event) => {
					event.preventDefault();
					setOffcanvasStatus(true);
				}}
				style={{ cursor: 'pointer' }}>
				<INNER t={t} icon={'Notifications'} title={'Notifications'} />
			</div>
		</>
	);
};
export const User = () => {
	const dispatch: any = useDispatch();

	const userData = useSelector((state: any) => state.user.userData);
	const logOutAndRedirect = async () => {
		await dispatch(logOutUser());
		navigate(`/login`);
	};

	const navigate = useNavigate();
	const handleItem = useNavigationItemHandle();
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const [collapseStatus, setCollapseStatus] = useState<boolean>(false);

	const { t } = useTranslation(['translation', 'menu']);

	const resultMenu = useMemo(() => {
		const notAvailable = ['summary'];
		return Object.entries(dashboardPagesMenu).reduce((acc, [key, value]) => {
			if (!notAvailable.includes(key)) {
				acc[key] = value;
			}
			return acc;
		}, {});
	}, []);

	return (
		<>
			<div
				className={classNames('user', { open: collapseStatus })}
				role='presentation'
				onClick={() => setCollapseStatus(!collapseStatus)}>
				<div className='user-avatar'>
					{userData.image && (
						<img src={userData.image} alt='Avatar' width={128} height={128} />
					)}
					{!userData.image && (
						<img src={UserImage4} alt='Avatar' width={128} height={128} />
					)}
				</div>
				<div className='user-info'>
					<div className='user-name d-flex align-items-center'>
						{`${userData?.name} ${userData?.second_name}`}
						<Icon icon='Verified' className='ms-1' color='info' />
					</div>
					{/*<div className='user-sub-title'>{userData?.position}</div>*/}
				</div>
			</div>
			<DropdownMenu>
				<DropdownItem>
					<Button icon='AccountBox' onClick={() => navigate(`/`)}>
						Profile
					</Button>
				</DropdownItem>
				<DropdownItem>
					<Button
						icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
						onClick={() => setDarkModeStatus(!darkModeStatus)}
						aria-label='Toggle fullscreen'>
						{darkModeStatus ? 'Dark Mode' : 'Light Mode'}
					</Button>
				</DropdownItem>
			</DropdownMenu>

			<Collapse isOpen={collapseStatus} className='user-menu'>
				<nav aria-label='aside-bottom-user-menu'>
					<Navigation menu={resultMenu} id='footer-dashboard' />

					<div className='navigation'>
						<div className='navigation-item cursor-pointer'>
							<Notifications />
						</div>
						<div role='presentation' className='navigation-item cursor-pointer'>
							<div className='d-flex align-items-center'>
								<ChangeLang inFoot={true} />
							</div>
						</div>

						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => {
								setDarkModeStatus(!darkModeStatus);
								handleItem();
							}}>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon
										icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
										color={darkModeStatus ? 'info' : 'warning'}
										className='navigation-icon'
									/>
									<span className='navigation-text'>
										{darkModeStatus
											? (t('menu:DarkMode') as ReactNode)
											: (t('menu:LightMode') as ReactNode)}
									</span>
								</span>
							</span>
						</div>
						<div className='navigation-item'>
							<div
								className='navigation-link navigation-link-pill'
								style={{ cursor: 'pointer' }}>
								<span className='navigation-link-info'>
									<svg
										viewBox='0 0 24 24'
										fill='currentColor'
										className='svg-icon--material svg-icon navigation-icon'
										data-name='Material--Notifications'>
										<path d='M0 0h24v24H0V0z' fill='none'></path>
										<path
											d='M12 6.5c-2.49 0-4 2.02-4 4.5v6h8v-6c0-2.48-1.51-4.5-4-4.5z'
											opacity='0.3'></path>
										<path d='M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z'></path>
									</svg>
									<span className='navigation-text'>Notifications</span>
								</span>
							</div>
						</div>
					</div>
				</nav>
				<NavigationLine />
				<nav aria-label='aside-bottom-user-menu-2'>
					<div className='navigation'>
						<div
							role='presentation'
							className='navigation-item cursor-pointer'
							onClick={() => logOutAndRedirect()}>
							<span className='navigation-link navigation-link-pill'>
								<span className='navigation-link-info'>
									<Icon icon='Logout' className='navigation-icon' />
									<span className='navigation-text'>
										{t('menu:Logout') as ReactNode}
									</span>
								</span>
							</span>
						</div>
					</div>
				</nav>
			</Collapse>
		</>
	);
};

export const UserFoot = () => {
	return (
		<AsideFoot>
			<nav aria-label='aside-bottom-menu'>
				<div className='navigation'></div>
			</nav>
			<User />
		</AsideFoot>
	);
};
