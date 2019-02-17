<template>
  <Layout>
    <div v-html="$page.post.content" class="blog-post dark-text"/>
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
@media screen and (min-width: 578px) {
 .blog-post > * {
    margin-left: 2rem;
  } 
}

.blog-post > h1 {
  position: relative;
  margin-bottom: 2rem;
  margin-left: 0;
  padding: 0.75rem 1rem;
  font-weight: 200;
  display: inline-block;
}

.blog-post > h1::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 1rem;
  width: 70%;
  height: 70%;
  border-bottom: 2px solid rgba(255, 87, 34, 0.8);
}

.blog-post > h2 {
  margin-bottom: 1.5rem;
}
.blog-post > h3 {
  margin-bottom: 1.2rem;
}
.blog-post > p {
  position: relative;
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
  line-height: 1.5rem;
}

.blog-post > p:first-of-type {
  font-weight: 300;
  margin-top: 1rem;
  padding-left: 1rem;
}

.blog-post > p:first-of-type:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 20%;
  right: 0;
  height: 60%;
  width: 100%;
  border-left: 2px solid rgba(255, 87, 34, 0.7);
}

.blog-post > p:last-of-type {
  font-weight: 600;
  font-style: italic;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
}

.blog-post > p:last-of-type:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -3rem;
  left: 35%;
  width: 30%;
  border-bottom: 2px solid rgba(255, 87, 34, 0.6);
}
</style>
