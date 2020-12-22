<template>
  <section class="section blog">
    <div class="container">
      <div class="blog__post-wrapper " v-show="post" v-if="post">
        <div class="blog__post">
          <div class="blog__post-image-container">
            <ImageItem
            :source="`http://localhost:1337${post[0].image.url}`"
            :alt="`${post[0].image.alternativeText}`"
          />
          </div>
          <div class="blog__post-shortened">
            <h2 class="blog__post-heading">{{ post[0].title }}</h2>
            <p class="blog__post-posted-by" v-for="author in post[0].authors" :key="author.id">{{ author.username }}</p>
            <p class="blog__post-paragraph">{{ post[0].content }}</p>
          </div>
        </div>
        <aside class="blog__post-sidebar">
          <div class="blog__post-category">
            <h2 class="blog__post-category-heading">Categories</h2>
            <ul class="blog__post-category-list">
              <li class="blog__post-category-item" v-for="category in post[0].categories" :key="category.id">{{ category.name }}</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script>
import ImageItem from '../ImageItem';
export default {
  name: 'BlogPost',
  components: {
    ImageItem
  },
	props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    loadingStatus() {
      return this.$store.getters.loadingStatus;
    },
    post() {
      return this.$store.getters.post;
    }
  },
  mounted() {
    this.$store.dispatch('fetchOneBlogPost', this.slug);
  } 
}
</script>

<style scoped lang="scss">
	.blog__post {
    grid-column: 1/3;
    &-wrapper {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 2rem;
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
      font-family: 'Play', sans-serif;
			margin-bottom: .5rem;
      text-transform: uppercase;
		}
		&-paragraph {
			flex: 1;
		}
    &-sidebar {
      background-color: var(--blog-post-sidebar-bgc);
    }
    &-category {
      &-list {

      }
      &-item {

      }
    }
  }
</style>
