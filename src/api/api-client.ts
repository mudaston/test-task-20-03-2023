import axios from 'axios'

export const apiUrl =
	process.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com/'

const apiClient = axios.create({
	baseURL: apiUrl,
	timeout: 10000,
	headers: {
		'Content-Type': 'application/json',
	},
})

export default apiClient
