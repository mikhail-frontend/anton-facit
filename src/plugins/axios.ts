import axios from 'axios';

//eslint-disable-next-line
type httpMethods =
	| 'get'
	| 'GET'
	| 'delete'
	| 'DELETE'
	| 'head'
	| 'HEAD'
	| 'options'
	| 'OPTIONS'
	| 'post'
	| 'POST'
	| 'put'
	| 'PUT'
	| 'patch'
	| 'PATCH'
	| 'purge'
	| 'PURGE'
	| 'link'
	| 'LINK'
	| 'unlink'
	| 'UNLINK';

export const token: string | null = localStorage.getItem('access_token');
export const BASE_URL: string | null = process.env.SERVER_HOST || '';

export const getData = async (url: string, params = {}) => {
	try {
		const response = await axios.get(`${BASE_URL}${url}`, {
			headers: {
				Authorization: localStorage.getItem('access_token'),
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			params,
		});
		const { data } = response;
		return data;
	} catch (error) {
		const errorMessage =
			error.response && error.response.data && error.response.data.errors
				? error.response.data.errors
				: '';
		return { errors: errorMessage };
	}
};
export const postData = async (url: string, params, method: httpMethods = 'POST') => {
	try {
		const response = await axios({
			headers: {
				Authorization: localStorage.getItem('access_token'),
				Accept: 'application/json',
				'Access-Control-Allow-Origin': '*',
			},
			method,
			url: `${BASE_URL}${url}`,
			data: params,
		});
		const { data } = response;
		return data;
	} catch (error) {
		const errorMessage =
			error.response && error.response.data && error.response.data.errors
				? error.response.data.errors
				: '';
		return { errors: errorMessage };
	}
};
