<script lang="ts">
import { Story } from "src/types";
import { defineComponent, PropType } from "vue";

export default defineComponent({
	name: "TopStoryList",
	props: {
		story: Object as PropType<Story>,
	},
});
</script>

<template>
	<article class="story">
		<a :href="story.url">
			<img class="story__image" alt="cat" src="src/assets/cat.jpg"
		/></a>
		<span class="story__points">{{ story.score }} points</span>
		<div class="story__content">
			<span class="story__content-date">{{ story.time }}</span>
			<h2 class="story__content-title">
				<a :href="story.url">{{ story.title }}</a>
			</h2>
			<div class="story__content-meta">
				<div class="story__content-meta__avatar"></div>
				<div class="story__content-meta__data">
					<span class="story__content-meta__data-id">{{ story.user.id }}</span>
					<span class="story__content-meta__data-karma"
						>{{ story.user.karma }} karma
					</span>
				</div>
			</div>
		</div>
	</article>
</template>

<style lang="scss" scoped>
$content-color: hsl(0, 0%, 100%);
$user-id-color: hsl(233, 25%, 55%);
$meta-color: hsl(326, 96%, 90%);
$avatar-color: hsl(217, 23%, 89%);
$content-background: hsl(197, 95%, 8%);
$points-background: hsla(213, 93%, 16%, 80%);
$content-padding: 0.8em;
$border-radius: 0.8em;

.story {
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	box-shadow: rgba(0, 0, 0, 0.5) 0px 10px 15px -3px,
		rgba(0, 0, 0, 0.1) 0px 4px 6px -2px;
	border-radius: $border-radius;

	&__image {
		width: 100%;
		border-top-right-radius: $border-radius;
		border-top-left-radius: $border-radius;
	}

	&__content {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		padding: $content-padding;
		background: $content-background;
		color: $content-color;
		border-radius: $border-radius;
		margin-top: -$border-radius;

		&-title {
			a {
				color: $content-color;
				text-decoration: none;
			}
			margin-bottom: $content-padding;
			font-size: clamp(1.2rem, 2.5vw, 1.5rem);
		}
		&-date {
			text-align: right;
			font-size: 0.9em;
			color: $meta-color;
		}
		&-meta {
			display: flex;
			align-items: center;
			gap: $content-padding;
			color: $meta-color;
			&__data {
				display: flex;
				flex-direction: column;
				font-size: 0.9rem;
				&-id {
					font-size: 1.1em;
					color: $user-id-color;
					font-weight: 600;
				}
			}
			&__avatar {
				height: 45px;
				width: 45px;
				border-radius: 100%;
				background: $avatar-color;
			}
		}
	}
	&__points {
		position: absolute;
		top: $content-padding;
		right: $content-padding;
		background: $points-background;
		padding: 0.3em;
		border-radius: 0.5em;
		color: $content-color;
	}
}
</style>
