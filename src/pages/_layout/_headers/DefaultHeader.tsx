import React from 'react';
import Header from '../../../layout/Header/Header';
import CommonHeaderRight from './CommonHeaderRight';

const DefaultHeader = () => {
	return (
		<Header>
			<div className="d-flex justify-content-end">
				<CommonHeaderRight />
			</div>

		</Header>
	);
};

export default DefaultHeader;
