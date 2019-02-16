<template>
  <Layout>
    <div class="overview">
      <div v-for="post in publishedPosts" :key="post.node.id" class="flex flex-col">
      <g-link :to="post.node.path" class="my-5 text-lg sm:text-xl md:text-2xl no-underline text-black hover:text-brand transition-1">
        <span class="font-italic text-sm text-grey-dark">{{ post.node.date.split('T')[0] }}</span> {{ post.node.title }} &#8594;
      </g-link>
    </div>
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
        date
        published
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

<style scoped>
.overview {
  min-height: 75vh;
}
</style>
