import React from 'react';
// import ReactDOM from 'react-dom'; // For React 17
import { createRoot } from 'react-dom/client'; // For React 18
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/styles.scss';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { ThemeContextProvider } from './contexts/themeContext';
import { AuthContextProvider } from './contexts/authContext';
import { GoogleOAuthProvider } from '@react-oauth/google';

import './i18n';

const children = (
	<GoogleOAuthProvider clientId="<C01koz8bu>">
	<AuthContextProvider>
		<ThemeContextProvider>
			<Router>
				<React.StrictMode>
					<App />
				</React.StrictMode>
			</Router>
		</ThemeContextProvider>
	</AuthContextProvider>
	</GoogleOAuthProvider>
);

const container = document.getElementById('root');

// ReactDOM.render(children, container); // For React 17
createRoot(container as Element).render(children); // For React 18

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
