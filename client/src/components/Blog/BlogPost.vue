<template>
  <div class="container">
    <BaseLoadingSpinner v-if="singlePostLoadingStatus" />
    <div class="blog__post-wrapper" v-else>
      <article class="blog__post">
        <div class="blog__post-image-container">
          <ImageItem
            :source="`${post[0].image.formats.large.url}`"
            :alt="`${post[0].image.alternativeText}`"
          />
          <BlogPostDate :post="post[0]" />
        </div>
        <div class="blog__post-content">
          <h2 class="blog__post-heading">{{ post[0].title }}</h2>
          <p
            class="blog__post-posted-by"
            v-for="author in post[0].authors"
            :key="author.id"
          >
            Published by: {{ author.username }}
          </p>
          <p class="blog__post-paragraph">
            {{ post[0].content }}
          </p>
        </div>
        <div
          class="blog__post-author-info"
          v-for="author in post[0].authors"
          :key="author.id"
        >
          <figure class="blog__post-author-avatar-container">
            <img
              :src="author.avatar.formats.thumbnail.url"
              :alt="author.avatar.alternativeText"
              class="blog__post-author-avatar"
            />
          </figure>
          <div class="blog__post-author-credentials">
            <div class="blog__post-author-credentials-header">
              <p class="text-uppercase">{{ author.username }}</p>
              <p class="text-uppercase">{{ author.occupation }}</p>
            </div>
            <div class="blog__post-author-credentials-content">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
                esse ut cupiditate nemo in earum atque numquam minus ab illo.
              </p>
            </div>
          </div>
        </div>
      </article>
      <aside class="blog__post-sidebar">
        <BaseWidget>
          <template v-slot:heading>
            Categories
          </template>
          <template v-slot:content>
            <ul class="blos__post-category-list">
              <li
                class="blog__post-category-item"
                v-for="category in post[0].categories"
                :key="category.id"
              >
                #{{ category.name }}
              </li>
            </ul>
          </template>
        </BaseWidget>
        <BaseWidget>
          <template v-slot:heading>
            Sample widget based on slots
          </template>
          <template v-slot:content>
            <p>
              Esllentesque lacus.Vivamus lorem arcu semperd duiac. Cras ornare
              arcu avamus nda leo. Etiam ind arcu. Morbi justo mauris tempus
              pharetrad interd um at congue semper purus. Lorem ipsum dolor sit
              amet sed consectetura.
            </p>
          </template>
        </BaseWidget>
        <BaseWidget>
          <template v-slot:heading>
            Sample widget based on slots
          </template>
          <template v-slot:content>
            <p>
              Esllentesque lacus.Vivamus lorem arcu semperd duiac. Cras ornare
              arcu avamus nda leo. Etiam ind arcu. Morbi justo mauris tempus
              pharetrad interd um at congue semper purus. Lorem ipsum dolor sit
              amet sed consectetura.
            </p>
          </template>
        </BaseWidget>
        <BaseWidget>
          <template v-slot:heading>
            Sample widget based on slots
          </template>
          <template v-slot:content>
            <p>
              Esllentesque lacus.Vivamus lorem arcu semperd duiac. Cras ornare
              arcu avamus nda leo. Etiam ind arcu. Morbi justo mauris tempus
              pharetrad interd um at congue semper purus. Lorem ipsum dolor sit
              amet sed consectetura.
            </p>
          </template>
        </BaseWidget>
      </aside>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ImageItem from "../ImageItem";
import BlogPostDate from "./BlogPostDate";

export default {
  name: "BlogPost",
  components: {
    ImageItem,
    BlogPostDate
  },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapGetters(["singlePostLoadingStatus", "singlePostErrorStatus", "post"])
  },
  async created() {
    await this.$store.dispatch("fetchSingleBlogPost", this.slug);
  }
};
</script>

<style scoped lang="scss">
.blog__post {
  grid-column: 1/3;
  background-color: var(--blog-post-bgc);
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;
    font-size: 0.8rem;
    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
      column-gap: 0;
    }
  }
  &:hover .blog__post-date {
    background-color: var(--color-primary);
  }
  &-image-container {
    position: relative;
    grid-column: 1/3;
    height: 18rem;
  }
  &-content {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    background-color: var(--blog-post-shortened-bgc);
  }
  &-heading {
    font-family: "Play", sans-serif;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }
  &-paragraph {
    flex: 1;
    white-space: pre-wrap;
    word-wrap: break-word;
  }
  &-posted-by {
    margin-bottom: 2rem;
  }
  &-author {
    &-info {
      display: flex;
      padding: 2rem;
      background-color: var(--color-primary);
    }
    &-avatar {
      height: auto;
      max-width: 90px;
      max-height: 90px;
      &-container {
        margin-right: 1rem;
      }
    }
    &-credentials {
      &-header {
        margin-bottom: 0.75rem;
      }
      &-body {
      }
    }
  }
  &-sidebar {
    background-color: var(--blog-post-sidebar-bgc);
    @media (max-width: 992px) {
      grid-column: 1/-1;
    }
  }
  &-category {
    &-list {
    }
    &-item {
    }
  }
}
</style>
