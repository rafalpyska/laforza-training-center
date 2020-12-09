<template>
    <div class="blog__post-date">
        <p class="blog__post-date-day">16</p>
        <p class="blog__post-date-month">Sep</p>
    </div>
</template>

<script>
export default {
  name: "BlogPostDate"
}
</script>

<style scoped lang="scss">
  .blog__post-date {
    position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		padding: .35rem 1rem;
		text-transform: uppercase;
		background-color: var(--blog-post-date-bgc);
		&-day {
				font-size: 1.4em;
		}
		&-month {
				font-size: .9em;
		}
	}
</style>
