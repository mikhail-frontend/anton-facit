import React, { useLayoutEffect } from 'react';
import Dropdown, {
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
} from '../../../components/bootstrap/Dropdown';
import LANG, { getLangWithKey, ILang } from '../../../lang';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import { useTranslation } from 'react-i18next';
import showNotification from '../../../components/extras/showNotification';
import Icon from '../../../components/icon/Icon';
import Spinner from '../../../components/bootstrap/Spinner';
import useDarkMode from '../../../hooks/useDarkMode';

type ChangeLangType = {
	inFoot: boolean;
};
const ChangeLang: React.FC<ChangeLangType> = ({ inFoot = false }) => {
	const { i18n } = useTranslation();
	const { darkModeStatus } = useDarkMode();

	const styledBtn: IButtonProps = {
		color: !inFoot ? (darkModeStatus ? 'dark' : 'light') : 'dark',
		hoverShadow: 'default',
		isLight: !inFoot ? !darkModeStatus : false,
		size: 'lg',
	};

	const changeLanguage = (lng: ILang['key']['lng']) => {
		i18n.changeLanguage(lng).then();
		showNotification(
			<span className='d-flex align-items-center'>
				<Icon icon={getLangWithKey(lng)?.icon} size='lg' className='me-1' />
				<span>{`Language changed to ${getLangWithKey(lng)?.text}`}</span>
			</span>,
			'You updated the language of the site. (Only "Aside" was prepared as an example.)',
		);
	};

	/**
	 * Language attribute
	 */
	useLayoutEffect(() => {
		document.documentElement.setAttribute('lang', i18n.language.substring(0, 2));
	});
	return (
		<>
			<div className='col-auto'>
				<Dropdown>
					<DropdownToggle hasIcon={false}>
						{typeof getLangWithKey(i18n.language as ILang['key']['lng'])?.icon ===
						'undefined' ? (
							<div
								className='d-flex align-items-center'
								style={{ cursor: 'pointer' }}>
								<Button
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...styledBtn}
									className='btn-only-icon'
									aria-label='Change language'>
									<Spinner isSmall inButton='onlyIcon' isGrow />
								</Button>
								<div className='navigation-link navigation-link-pill'>
									<div className='navigation-link-info'>
										<span className='navigation-text'>Your language</span>
									</div>
								</div>
							</div>
						) : (
							<div
								className='d-flex align-items-center rounded'
								style={{ cursor: 'pointer' }}>
								<Button
									// eslint-disable-next-line react/jsx-props-no-spreading
									{...styledBtn}
									icon={
										getLangWithKey(i18n.language as ILang['key']['lng'])?.icon
									}
									aria-label='Change language'
								/>
								<div className='navigation-link navigation-link-pill'>
									<div className='navigation-link-info'>
										<span className='navigation-text'>Your language</span>
									</div>
								</div>
							</div>
						)}
					</DropdownToggle>
					<DropdownMenu isAlignmentEnd>
						{Object.keys(LANG).map((i) => (
							<DropdownItem key={LANG[i].lng}>
								<Button
									icon={LANG[i].icon}
									onClick={() => changeLanguage(LANG[i].lng)}>
									{LANG[i].text}
								</Button>
							</DropdownItem>
						))}
					</DropdownMenu>
				</Dropdown>
			</div>
			<DropdownMenu isAlignmentEnd>
				{Object.keys(LANG).map((i) => (
					<DropdownItem key={LANG[i].lng}>
						<Button icon={LANG[i].icon} onClick={() => changeLanguage(LANG[i].lng)}>
							{LANG[i].text}
						</Button>
					</DropdownItem>
				))}
			</DropdownMenu>
		</>
	);
};

export default ChangeLang;
