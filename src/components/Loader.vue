<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "Loader",
});
</script>

<template>
	<div class="loader"></div>
	<div class="loader-section section-left"></div>
	<div class="loader-section section-right"></div>
</template>

<style lang="scss" scoped>
.loader {
	display: block;
	width: 150px;
	height: 150px;
	border-radius: 50%;
	border: 3px solid transparent;
	border-top-color: #16a085;
	animation: spin 1.7s linear infinite;

	&:before {
		content: "";
		position: absolute;
		top: 5px;
		left: 5px;
		right: 5px;
		bottom: 5px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #e74c3c;
		animation: spin-reverse 0.6s linear infinite;
	}

	&:after {
		content: "";
		position: absolute;
		top: 15px;
		left: 15px;
		right: 15px;
		bottom: 15px;
		border-radius: 50%;
		border: 3px solid transparent;
		border-top-color: #f9c922;
		animation: spin 1s linear infinite;
	}
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@keyframes spin-reverse {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(-360deg);
	}
}
</style>
