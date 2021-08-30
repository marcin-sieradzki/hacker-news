import axios from "axios";
import { userEndpoint } from "src/constants/api";
import { User } from "src/types";

export function getUser(id: string): Promise<User> {
	return axios
		.get(`${userEndpoint}/${id}.json`)
		.then((response) => response.data);
}
