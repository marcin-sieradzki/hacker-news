<script lang="ts">
import { useTopStoryList } from "src/composables/useTopStoryList";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "TopStoryListError",
	props: {
		error: Object as PropType<Error>,
	},
	methods: {
		async refetchStories() {
			const { fetchData } = useTopStoryList();
			await fetchData();
		},
	},
});
</script>

<template>
	<div class="top-story-list-error-handler" v-if="error">
		<p>Could not load stories. {{ error.message || "" }}</p>
		<button @click="refetchStories">Try again</button>
	</div>
</template>
