<template>
    <div class="blog__post-date">
        <p class="blog__post-date-day">16</p>
        <p class="blog__post-date-month">SEP</p>
    </div>
</template>

<script>
    export default {
        name: "BlogPostDate"
    };
</script>

<style scoped lang="scss">
    .blog__post-date {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1;
        padding: 1em 2em;
        background-color: var(--blog-post-date-bgc);
    }
</style>
