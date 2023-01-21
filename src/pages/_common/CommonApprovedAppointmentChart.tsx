import React from 'react';
import moment from 'moment';
import classNames from 'classnames';
import Card, {
	CardActions,
	CardBody,
	CardHeader,
	CardLabel,
	CardSubTitle,
	CardTitle,
} from '../../components/bootstrap/Card';
import Icon from '../../components/icon/Icon';
import Button from '../../components/bootstrap/Button';
import { demoPagesMenu } from '../../menu';
import useDarkMode from '../../hooks/useDarkMode';

const CommonApprovedAppointmentChart = () => {
	const { darkModeStatus } = useDarkMode();

	return (
		<Card
			className={classNames('shadow-3d-success', {
				'text-dark': darkModeStatus,
				'bg-lo50-success': darkModeStatus,
				'bg-l25-success': !darkModeStatus,
			})}
			isCompact>
			<CardHeader className='bg-transparent'>
				<CardLabel>
					<CardTitle>Approved Appointments</CardTitle>
					<CardSubTitle>
						<span className='text-danger fw-bold'>
							-68% <Icon icon='ArrowDownward' />
						</span>
					</CardSubTitle>
				</CardLabel>
				<CardActions>
					<Button
						color='success'
						tag='a'
						to={`../${demoPagesMenu.appointment.subMenu.appointmentList.path}`}>
						View Appointments
					</Button>
				</CardActions>
			</CardHeader>
			<CardBody>
				<div className='position-absolute'>
					<span className='display-3 me-3'>12</span>
				</div>
			</CardBody>
		</Card>
	);
};

export default CommonApprovedAppointmentChart;
