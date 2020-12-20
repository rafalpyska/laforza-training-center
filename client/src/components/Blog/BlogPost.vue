<template>
    <div class="blog__post-wrapper">
      <div class="blog__post">
        <div class="blog__post-image-container">

        </div>
        <div class="blog__post-shortened">
          <h2 class="blog__post-heading">Sample</h2>
          <p class="blog__post-paragraph">Sample</p>
          <div class="blog__post-controls">
            <AppButton type="read-more">
              Read more
            </AppButton>
            <p class="blog__post-posted-by">sample</p>
          </div>
        </div>
      </div>
      <aside class="blog__post-sidebar">

      </aside>
    </div>

</template>

<script>
import AppButton from '../AppButton'

export default {
  name: 'BlogPosts',
  components: {
    AppButton
	},
	props: {

	}
}
</script>

<style scoped lang="scss">
	.blog__post {
    &-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: 25rem;
      margin-bottom: 4rem;
      font-size: .8rem;
    }
    background-color: var(--blog-post-bgc);
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
			background-color: var(--blog-post-shortened-bgc);
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
    &-sidebar {
      background-color: var(--blog-post-sidebar-bgc);
    }
  }
</style>
