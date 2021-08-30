import axios from "axios";
import { storyEndpoint } from "src/constants/api";
import { Story } from "src/types";

export async function getStory(id: number): Promise<Story> {
	const story = await axios.get(`${storyEndpoint}/${id}.json`);
	return story.data;
}
