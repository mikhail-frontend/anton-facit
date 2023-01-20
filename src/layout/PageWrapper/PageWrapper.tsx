import React, { useLayoutEffect, forwardRef, ReactElement, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { ISubHeaderProps } from '../SubHeader/SubHeader';
import { IPageProps } from '../Page/Page';
import { useNavigate } from 'react-router-dom';
import { demoPagesMenu } from '../../menu';
import {useSelector, useDispatch} from "react-redux";
import {simpleLogin, setUserFromStorage} from "../../store/modules/user/userActions";

interface IPageWrapperProps {
	isProtected?: boolean;
	title?: string;
	description?: string;
	children:
		| ReactElement<ISubHeaderProps>[]
		| ReactElement<IPageProps>
		| ReactElement<IPageProps>[];
	className?: string;
}
const PageWrapper = forwardRef<HTMLDivElement, IPageWrapperProps>(
	({ isProtected, title, description, className, children }, ref) => {
		useLayoutEffect(() => {
			// @ts-ignore
			document.getElementsByTagName('TITLE')[0].text = `${title ? `${title} | ` : ''}${
				process.env.REACT_APP_SITE_NAME
			}`;
			// @ts-ignore
			document
				?.querySelector('meta[name="description"]')
				.setAttribute('content', description || process.env.REACT_APP_META_DESC || '');
		});

		const isLoggedIn = useSelector((state:any) => state.user.isLoggedIn);
		const dispatch:any = useDispatch();

		const navigate = useNavigate();

		/// ЛОГИКА ПРОВЕРКИ ЗАЛОГИНЕННОСТИ БУДЕТ ТУТ
		useEffect(() => {
			const user = localStorage.getItem('userU10');
			if(user && JSON.parse(user) && JSON.parse(user).email) {
				dispatch(simpleLogin());
				dispatch(setUserFromStorage(JSON.parse(user)))
				return () => {};
			}

			if (isProtected && !isLoggedIn) {
				navigate(`../${demoPagesMenu.login.path}`);
			}
			return () => {};
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		return (
			<div ref={ref} className={classNames('page-wrapper', 'container-fluid', className)}>
				{children}
			</div>
		);
	},
);
PageWrapper.displayName = 'PageWrapper';
PageWrapper.propTypes = {
	isProtected: PropTypes.bool,
	title: PropTypes.string,
	description: PropTypes.string,
	// @ts-ignore
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};
PageWrapper.defaultProps = {
	isProtected: true,
	title: undefined,
	description: undefined,
	className: undefined,
};

export default PageWrapper;
