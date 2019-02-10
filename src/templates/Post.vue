<template>
  <Layout>
    <div v-html="$page.post.content" class="blog-post"/>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    content
    published
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    };
  }
};
</script>

<style>
.blog-post > h2 {
  margin-bottom: 1.5rem;
}
.blog-post > p {
  margin-bottom: 1rem;
}
</style>
