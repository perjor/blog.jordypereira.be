<template>
  <Layout>
    <div v-for="post in publishedPosts" :key="post.node.id" class="flex flex-col items-center">
      <g-link :to="post.node.path" class="blog-post transition-1">
        {{ post.node.title }} &#8594;
      </g-link>
    </div>
  </Layout>
</template>

<page-query>
query Posts {
  posts: allPost {
    edges {
      node {
        title
        path
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Home',
  computed: {
    publishedPosts() {
      return this.$page.posts.edges.filter(post => {
        return post.node.published == true
      })
    },
  },
}
</script>


<style>
.blog-post {
  @apply my-5 text-2xl no-underline text-black;
}

.blog-post:hover {
  @apply text-indigo;
}
</style>
