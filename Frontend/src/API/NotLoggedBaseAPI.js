import axios from 'axios';
const BASE_URL = "https://efc3-2806-2f0-64a1-f0c5-bb78-e02b-49a9-8aaf.ngrok-free.app";

const NewInstance = axios.create({
	// Configuration
	baseURL: BASE_URL,
	headers: {
		accept: 'application/json'
      },
});

export default NewInstance;

 