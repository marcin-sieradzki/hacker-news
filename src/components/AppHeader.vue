<template>
	<header class="header">
		<div class="header-container">
			<h1>Random hacker news</h1>
		</div>
	</header>
</template>

<style lang="scss" scoped>
.header {
	padding: 1rem;
	background: #949177;
	width: 100%;
	display: flex;
	justify-content: center;
	color: white;
	&-container {
		width: 100%;
		max-width: 90rem;
		padding: 0 1rem;
		@media (max-width: 90rem) {
			padding: 0;
		}
		h1 {
			font-size: clamp(1.5rem, 2.5vw, 2.5rem);
		}
	}
}
</style>
