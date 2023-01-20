import Button from '../../../components/bootstrap/Button';
import classNames from 'classnames';
import AppleLogin from 'react-apple-login';
import { GoogleLogin } from '@react-oauth/google';
import React from 'react';

const SocialButtons = ({ darkModeStatus }) => {
	return (
		<>
			<div className='col-12 mb-3 text-center text-muted'>OR</div>
			<div className='col-12 mb-3'>
				<Button
					isOutline
					color={darkModeStatus ? 'light' : 'dark'}
					style={{ position: 'relative', display: 'block' }}
					className={classNames('w-100 py-3', {
						'border-light': !darkModeStatus,
						'border-dark': darkModeStatus,
					})}
					icon='CustomApple'>
					Sign in with Apple
					<span
						style={{
							display: 'block',
							position: 'absolute',
							width: '100%',
							height: '100%',
							top: 0,
							left: 0,
						}}>
						<AppleLogin
							clientId='com.react.apple.login'
							redirectURI='https://redirectUrl.com'
						/>
					</span>
				</Button>
			</div>
			<div className='col-12'>
				<GoogleLogin
					onSuccess={(credentialResponse) => {
						console.log(credentialResponse);
					}}
					onError={() => {
						console.log('Login Failed');
					}}
				/>
			</div>
		</>
	);
};

export default SocialButtons;
