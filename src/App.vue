<script lang="ts">
import Home from "./pages/Home.vue";
import { defineComponent } from "vue";
import AppHeader from "src/components/AppHeader.vue";

export default defineComponent({
	name: "App",
	components: {
		AppHeader,
		Home,
	},
});
</script>

<template>
	<div class="app">
		<AppHeader></AppHeader>
		<Home />
	</div>
</template>

<style lang="scss">
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body,
html {
	font-family: sans-serif;
}

.app {
	height: 100%;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto 1fr auto;
}
</style>
