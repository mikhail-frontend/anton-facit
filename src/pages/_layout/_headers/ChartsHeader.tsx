import React from 'react';
import Header from '../../../layout/Header/Header';
import useDeviceScreen from '../../../hooks/useDeviceScreen';
import CommonHeaderRight from './CommonHeaderRight';

const ChartsHeader = () => {
	const { width } = useDeviceScreen();

	return (
		<Header>
			<CommonHeaderRight />
		</Header>
	);
};

export default ChartsHeader;
