import React from 'react';
import classNames from 'classnames';
import Header, { HeaderLeft, HeaderRight } from '../../../layout/Header/Header';
import useDarkMode from '../../../hooks/useDarkMode';

const DashboardBookingHeader = () => {
	const { darkModeStatus } = useDarkMode();
	return (
		<Header>
			<HeaderLeft>
				<div className='d-flex align-items-center'>
					<div className='row g-4'>
						<div className='col-md-auto'>
							<div
								className={classNames('fs-3', 'fw-bold', {
									'text-dark': !darkModeStatus,
								})}>
								Hi, John!
							</div>
						</div>
					</div>
				</div>
			</HeaderLeft>
		</Header>
	);
};

export default DashboardBookingHeader;
