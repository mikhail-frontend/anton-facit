import React, { FC, ReactNode, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Button, { IButtonProps } from '../../../components/bootstrap/Button';
import { HeaderRight } from '../../../layout/Header/Header';
import OffCanvas, {
	OffCanvasBody,
	OffCanvasHeader,
	OffCanvasTitle,
} from '../../../components/bootstrap/OffCanvas';
import Alert from '../../../components/bootstrap/Alert';
import Icon from '../../../components/icon/Icon';
import ThemeContext from '../../../contexts/themeContext';
import useDarkMode from '../../../hooks/useDarkMode';
import Popovers from '../../../components/bootstrap/Popovers';
import ChangeLang from './ChangeLang';

interface ICommonHeaderRightProps {
	beforeChildren?: ReactNode;
	afterChildren?: ReactNode;
}

type IHeaderOffCanvas = {
	offcanvasStatus: boolean;
	setOffcanvasStatus: (val: boolean) => void;
};
export const HeaderOffCanvas: React.FC<IHeaderOffCanvas> = ({
	offcanvasStatus,
	setOffcanvasStatus,
}) => {
	return (
		<OffCanvas
			id='notificationCanvas'
			titleId='offcanvasExampleLabel'
			placement='end'
			isOpen={offcanvasStatus}
			setOpen={setOffcanvasStatus}>
			<OffCanvasHeader setOpen={setOffcanvasStatus}>
				<OffCanvasTitle id='offcanvasExampleLabel'>Notifications</OffCanvasTitle>
			</OffCanvasHeader>
			<OffCanvasBody>
				<Alert icon='ViewInAr' isLight color='info' className='flex-nowrap'>
					4 new components added.
				</Alert>
				<Alert icon='ThumbUp' isLight color='warning' className='flex-nowrap'>
					New products added to stock.
				</Alert>
				<Alert icon='Inventory2' isLight color='danger' className='flex-nowrap'>
					There are products that need to be packaged.
				</Alert>
				<Alert icon='BakeryDining' isLight color='success' className='flex-nowrap'>
					Your food order is waiting for you at the consultation.
				</Alert>
				<Alert icon='Escalator' isLight color='primary' className='flex-nowrap'>
					Escalator will turn off at 6:00 pm.
				</Alert>
			</OffCanvasBody>
		</OffCanvas>
	);
};
const CommonHeaderRight: FC<ICommonHeaderRightProps> = ({ beforeChildren, afterChildren }) => {
	const { darkModeStatus, setDarkModeStatus } = useDarkMode();

	const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
	const styledBtn: IButtonProps = {
		color: darkModeStatus ? 'dark' : 'light',
		hoverShadow: 'default',
		isLight: !darkModeStatus,
		size: 'lg',
	};

	const [offcanvasStatus, setOffcanvasStatus] = useState(false);

	return (
		<HeaderRight>
			<div className='row g-3'>
				{beforeChildren}
				{/* Dark Mode */}
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Dark / Light mode'>
						<Button
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...styledBtn}
							onClick={() => setDarkModeStatus(!darkModeStatus)}
							className='btn-only-icon'>
							<Icon
								icon={darkModeStatus ? 'DarkMode' : 'LightMode'}
								color={darkModeStatus ? 'info' : 'warning'}
								className='btn-icon'
							/>
						</Button>
					</Popovers>
				</div>

				{/*	Full Screen */}
				<div className='col-auto'>
					<Popovers trigger='hover' desc='Fullscreen'>
						<Button
							// eslint-disable-next-line react/jsx-props-no-spreading
							{...styledBtn}
							icon={fullScreenStatus ? 'FullscreenExit' : 'Fullscreen'}
							onClick={() => setFullScreenStatus(!fullScreenStatus)}
							aria-label='Toggle dark mode'
						/>
					</Popovers>
				</div>

				{/* Lang Selector */}

				<ChangeLang />

				{/*	Notifications */}
				<div className='col-auto'>
					<Button
						// eslint-disable-next-line react/jsx-props-no-spreading
						{...styledBtn}
						icon='Notifications'
						onClick={() => setOffcanvasStatus(true)}
						aria-label='Notifications'
					/>
				</div>
				{afterChildren}
			</div>
			<HeaderOffCanvas
				offcanvasStatus={offcanvasStatus}
				setOffcanvasStatus={setOffcanvasStatus}
			/>
		</HeaderRight>
	);
};
CommonHeaderRight.propTypes = {
	beforeChildren: PropTypes.node,
	afterChildren: PropTypes.node,
};
CommonHeaderRight.defaultProps = {
	beforeChildren: null,
	afterChildren: null,
};

export default CommonHeaderRight;
