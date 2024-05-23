import axios from 'axios';
const BASE_URL = "http://127.0.0.1:3000/";

const NewInstance = axios.create({
	// Configuration
	baseURL: BASE_URL,
	headers: {
		accept: 'application/json'
      },
});

export default NewInstance;

 