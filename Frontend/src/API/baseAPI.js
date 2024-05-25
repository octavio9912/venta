import axios from 'axios';
export const BASE_URL = "http://localhost:3000";

const NewInstance = axios.create({
	// Configuration
	baseURL: BASE_URL,
	headers: {
		accept: 'application/json',
	},
});

export function setAuthToken(token) {
	NewInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

NewInstance.interceptors.request.use(
	(config) => {
		const authToken = localStorage.getItem("token");
		if (authToken) {
			config.headers.Authorization = `Bearer ${authToken}`;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default NewInstance;