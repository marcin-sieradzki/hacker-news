<script lang="ts">
import TopStoryListErrorHandler from "src/components/TopStoryListErrorHandler.vue";
import { defineComponent, onErrorCaptured, Ref, ref } from "vue";
import TopStoryListLoader from "src/components/TopStoryListLoader.vue";
import TopStoryList from "src/components/TopStoryList.vue";

export default defineComponent({
	name: "Home",
	components: {
		TopStoryList,
		TopStoryListLoader,
		TopStoryListErrorHandler,
	},
	setup() {
		const error: Ref<Error | null> = ref(null);
		onErrorCaptured((e) => {
			error.value = e;
			return true;
		});
		return {
			error,
		};
	},
});
</script>

<template>
	<div class="home">
		<Suspense>
			<template #default>
				<TopStoryList />
			</template>
			<template #fallback>
				<TopStoryListLoader />
			</template>
		</Suspense>
		<TopStoryListErrorHandler :error="error" v-if="error" />
	</div>
</template>

<style lang="scss" scoped>
.home {
	height: 100%;
	width: 100%;
	display: flex;
	justify-content: center;
}
</style>
