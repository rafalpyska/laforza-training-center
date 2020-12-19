<template>
    <div class="blog__post">
      <div class="blog__post-image-container">
          <img src="http://dummyimage.com/780x390" class="image" alt="placeholder">
          <BlogPostDate />
      </div>
      <div class="blog__post-shortened">
        <h2>ETIAM RHONCUS. MAECENAS TEMPUS, TELLUS EGET RHONCUS</h2>
        <p>Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien vestibulum pur.</p>
        <div class="blog__post-controls">
          <AppButton type="read-more">
            Read More
          </AppButton>
          <p class="blog__post-posted-by">Admin</p>
        </div>
      </div>
    </div>
</template>

<script>
import AppButton from './AppButton'
import BlogPostDate from './BlogPostDate'

export default {
  name: 'BlogPostsList',
  components: {
    AppButton,
    BlogPostDate
  }
}
</script>

<style scoped lang="scss">
	.blog__post {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: auto;
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
				padding: 2rem;
				background-color: var(--blog-post-shortened-bgc);
		}
		&-controls {
				display: flex;
				justify-content: space-between;
				align-items: center;
				margin-top: 1.75rem;
		}
	}
</style>
