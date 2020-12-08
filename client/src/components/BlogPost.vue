<template>
    <div class="blog__post">
        <div class="blog__post-image-container">
            <img src="http://dummyimage.com/780x390" alt="placeholder">
            <BlogPostDate />
        </div>
        <div class="blog__post-shortened">
            <h2>ETIAM RHONCUS. MAECENAS TEMPUS, TELLUS EGET RHONCUS</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit, in. Illo perferendis neque voluptatem voluptas, doloribus nam. Quae cumque blanditiis natus praesentium reiciendis quasi aspernatur architecto, earum provident. Ut, earum.</p>
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
        name: "BlogPost",
        components: {
            AppButton,
            BlogPostDate
        }
    };
</script>

<style scoped lang="scss">
    .blog__post {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 4rem;
        &:hover .blog__post-date{
            background-color: var(--color-primary);
        }
        &-image-container {
            position: relative;
            grid-column: 1/3;
        }
        &-shortened {
            background-color: var(--blog-post-shortened-bgc);
        }
    }
</style>
