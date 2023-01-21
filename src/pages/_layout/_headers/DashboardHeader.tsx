import React from 'react';
import Header, { HeaderLeft } from '../../../layout/Header/Header';
import Search from '../../../components/Search';

const DashboardHeader = () => {
	return (
		<Header>
			<HeaderLeft>
				<Search />
			</HeaderLeft>
		</Header>
	);
};

export default DashboardHeader;
