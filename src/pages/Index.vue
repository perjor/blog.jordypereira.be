<template>
  <Layout>
    <div v-for="post in publishedPosts" :key="post.node.id" class="flex flex-col items-center">
      <g-link :to="post.node.path" class="my-5 text-2xl no-underline text-black hover:text-brand transition-1">
        <span class="font-italic text-sm">{{ post.node.date.split('T')[0] }}</span> {{ post.node.title }} &#8594;
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