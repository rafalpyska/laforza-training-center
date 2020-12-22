<template>
    <div class="blog__post-list">
      <div class="blog__post-list-image-container">
        <ImageItem
        	:source="`http://localhost:1337${post.image.url}`"
        	:alt="`${post.image.alternativeText}`"
      	/>
        <BlogPostDate 
					:post="post"
				/>
      </div>
      <div class="blog__post-list-shortened">
        <h2 class="blog__post-list-heading">{{ post.title }}</h2>
        <p class="blog__post-list-paragraph">{{ post.summary  }}</p>
        <div class="blog__post-list-controls">
					<router-link :to="{name: 'Post', params: { slug: post.slug }}" class="btn btn__load-more">Read More</router-link>
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

export default {
  name: 'BlogPostsList',
  components: {
		ImageItem,
    BlogPostDate
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
		grid-template-columns: repeat(3, 1fr);
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
