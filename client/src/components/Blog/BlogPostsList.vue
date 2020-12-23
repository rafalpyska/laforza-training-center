<template>
	<div class="blog__post-list">
		<div class="blog__post-list-image-container">
			<image-item
				:source="`http://localhost:1337${post.image.url}`"
				:alt="`${post.image.alternativeText}`"
			/>
			<blog-post-date
				:post="post"
			/>
		</div>
		<div class="blog__post-list-shortened">
			<h2 class="blog__post-list-heading">{{ post.title }}</h2>
			<p class="blog__post-list-paragraph">{{ post.summary  }}</p>
			<div class="blog__post-list-controls">
				<app-button type="load-more">
					<router-link :to="{name: 'Post', params: { slug: post.slug }}" class="">Read More</router-link>
				</app-button>

				<p class="blog__post-list-posted-by" v-for="author in post.authors" :key="author.id">{{ author.username }}</p>
			</div>
		</div>
		<router-view>
		</router-view>
	</div>
</template>

<script>
import ImageItem from '../ImageItem';
import BlogPostDate from './BlogPostDate'
import AppButton from '../AppButton'

export default {
  name: 'BlogPostsList',
  components: {
		ImageItem,
		BlogPostDate,
		AppButton
	},
	props: {
		post: {
			type: Object,
			required: true
		}
	}
}
</script>

<style scoped lang="scss">
	.blog__post-list {
		display: grid;
    grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
		grid-auto-rows: 25rem;
		margin-bottom: 4rem;
		font-size: .8rem;
		&:hover .blog__post-date{
			background-color: var(--color-primary);
		}
		&-image-container {
			position: relative;
			grid-column: 1/3;
		}
		&-shortened {
			display: flex;
			flex-direction: column;
			padding: 2rem;
			background-color: var(--blog-post-list-shortened-bgc);
			@media (max-width: 992px) {
      	grid-column: 1/-1;
    	}
		}
		&-heading {
			margin-bottom: .75rem;
		}
		&-paragraph {
			flex: 1;
		}
		&-controls {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 1.75rem;
		}
	}
</style>
