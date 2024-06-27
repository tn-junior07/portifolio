import { useState } from "react";
import axios from "axios";

const API = "https://api-portfolio-j3wh.onrender.com/";
axios.defaults.baseURL = API;

const useAxios = () => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(null);

	const request = async ({ url, method, body = null, headers = { "Content-Type": "application/json" } }) => {
		try {
			setLoading(true);
			setError(null);
			setData(null);
			const response = await axios(url, {
				method: method,
				headers: headers,
				data: body,
			});
			setData(response.data);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};
	return { data, error, loading, request, setData, setError, setLoading };
};

export default useAxios;
