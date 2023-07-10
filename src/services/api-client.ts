import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'da0330998dab4f588965d48a26e40666',
	},
});
