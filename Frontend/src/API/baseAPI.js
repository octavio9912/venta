import axios from 'axios';
export const BASE_URL = "https://efc3-2806-2f0-64a1-f0c5-bb78-e02b-49a9-8aaf.ngrok-free.app";

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