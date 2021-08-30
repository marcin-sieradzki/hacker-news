import axios from "axios";
import { topStoryListEndpoint } from "src/constants/api";
import { TopStories } from "src/types";

export function getTopStoryIds(): Promise<TopStories> {
	return axios.get(topStoryListEndpoint).then((response) => response.data);
}
