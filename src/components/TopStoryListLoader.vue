<script lang="ts">
import Loader from "./Loader.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "TopStoryListLoader",
	components: {
		Loader,
	},
});
</script>

<template>
	<div class="top-story-list-loader">
		<div>
			<Loader />
			<p>Loading stories...</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.top-story-list-loader {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 1em 0;
	& > div {
		& > p {
			margin-top: 1em;
		}
	}
}
</style>
