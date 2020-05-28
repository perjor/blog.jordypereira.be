<template>
  <Layout>
    <div class="blog-post text-theme">
      <h1>{{$page.post.title}}</h1>
      <div v-html="$page.post.content"></div>
    </div>
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

.blog-post h1 {
  position: relative;
  margin-bottom: 2rem;
  margin-left: 0;
  padding: 0.75rem 1rem;
  font-weight: 200;
  display: inline-block;
  line-height: 1.2em;
}

.blog-post h1::after {
  content: '';
  display: block;
  position: absolute;
  bottom: 0;
  left: 1rem;
  width: 70%;
  height: 70%;
  border-bottom: 2px solid rgba(255, 102, 102, 0.8);
}

.blog-post h2 {
  margin-bottom: 1.5rem;
  margin-top: 2rem;
}
.blog-post h3 {
  margin-bottom: 1.2rem;
}
.blog-post div > p {
  position: relative;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  letter-spacing: 0.3px;
  line-height: 1.5rem;
}

.blog-post blockquote {
  position: relative;
  margin-bottom: 1rem;
  padding-left: 1rem;
  font-weight: 300;
  letter-spacing: 0.3px;
  line-height: 1.5rem;
}
.blog-post blockquote:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 20%;
  right: 0;
  height: 60%;
  width: 100%;
  border-left: 2px solid rgba(255, 102, 102, 0.7);
}

.blog-post pre {
  border-radius: 0.25rem;
}
:not(pre) code[class*="language-"] {
  border-radius: 0.25rem;
  padding: 0.1em 0.3em;
}

.blog-post a {
  font-weight: 300;
  letter-spacing: 0.3px;
  line-height: 1.5rem;
  color: inherit;
}

.blog-post div > p:first-of-type, .blog-post div > p > em {
  font-weight: 300;
  margin-top: 1rem;
  padding-left: 1rem;
}

.blog-post div > p:first-of-type:after, .blog-post div > p > em:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 20%;
  right: 0;
  height: 60%;
  width: 100%;
  border-left: 2px solid rgba(255, 102, 102, 0.7);
}

.blog-post div > p:last-of-type {
  font-weight: 600;
  font-style: italic;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
}

.blog-post div > p:last-of-type:after {
  content: '';
  display: block;
  position: absolute;
  bottom: -3rem;
  left: 35%;
  width: 30%;
  border-bottom: 2px solid rgba(255, 102, 102, 0.6);
}
</style>
