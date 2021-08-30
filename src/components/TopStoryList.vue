<script lang="ts">
import TopStoryListItem from "src/components/TopStoryListItem.vue";
import { defineComponent } from "vue";
import { useTopStoryList } from "src/composables/useTopStoryList";

export default defineComponent({
	name: "TopStoryList",
	components: {
		TopStoryListItem,
	},
	async setup() {
		const { fetchData, topEnrichedStoryList, isLoading } = useTopStoryList();
		await fetchData();

		return {
			topEnrichedStoryList,
			isLoading,
		};
	},
});
</script>

<template>
	<main class="top-story-list">
		<TopStoryListItem
			v-for="story in topEnrichedStoryList"
			:key="story"
			:story="story"
		/>
		<p v-if="!isLoading && !topEnrichedStoryList.length">
			No stories. Please try again.
		</p>
	</main>
</template>

<style lang="scss" scoped>
.top-story-list {
	width: 100%;
	max-width: 90rem;
	display: grid;
	grid-gap: 1rem;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	padding: 1rem;
	@media (max-width: 640px) {
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
	}
}
</style>
