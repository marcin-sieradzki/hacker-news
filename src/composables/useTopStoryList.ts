import { getUser } from "src/services/user/getUser";
import { getStory } from "src/services/story/getStory";
import { getTopStoryIds } from "src/services/story/getTopStoryList";
import { computed, ref } from "vue";
import { Story, StoryDto, User } from "src/types";
import { sortObjectArrayBy, getRandomItemsfromArray } from "src/utils/array";
import { convertTimestampToDate } from "src/utils/date";

const data = ref<StoryDto[]>([]);

export function useTopStoryList() {
	const isLoading = ref(false);
	const error = ref(null);

	const topEnrichedStoryList = computed(() => {
		return sortObjectArrayBy(data.value, "score");
	});

	const fetchData = async (): Promise<void> => {
		isLoading.value = true;
		error.value = null;
		try {
			const topStoryIds = await getTopStoryIds();
			const randomTopStoryIds = getRandomItemsfromArray<number>(
				topStoryIds,
				10,
			);
			const topStoryList = await fetchTopStoryList(randomTopStoryIds);
			const topStoryListUsers = await fetchTopStoryListUsers(topStoryList);
			const enrichedStoryList = enrichStoryList(
				topStoryList,
				topStoryListUsers,
			);
			data.value = enrichedStoryList;
		} catch (e) {
			error.value = e;
			data.value = [];
		} finally {
			isLoading.value = false;
		}
	};

	const fetchTopStoryList = async (
		randomTopStoryIds: number[],
	): Promise<Story[]> => {
		const storyRequests = randomTopStoryIds?.map((storyId) =>
			getStory(storyId),
		);
		const storyList = await Promise.all(storyRequests);
		return storyList;
	};

	const fetchTopStoryListUsers = async (
		topStoryList: Story[],
	): Promise<User[]> => {
		const userRequests = topStoryList.map((story) => getUser(story.by));
		const users = await Promise.all(userRequests);
		return users;
	};

	const enrichStoryList = (
		topStoryList: Story[],
		topStoryListUsers: User[],
	): StoryDto[] => {
		return topStoryList.map((story) => buildStoryDto(story, topStoryListUsers));
	};

	const buildStoryDto = (story: Story, topStoryListUsers: User[]): StoryDto => {
		return {
			...story,
			time: convertTimestampToDate(story.time),
			user: {
				...topStoryListUsers.find((user) => user.id === story.by),
			} as User,
		};
	};

	return {
		isLoading,
		data,
		error,
		fetchData,
		topEnrichedStoryList,
	};
}
