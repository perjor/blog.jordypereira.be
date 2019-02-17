<template>
  <Layout>
    <div class="overview">
      <div class="filters flex justify-center text-xs">
        <span>Filter on: &nbsp;</span><span :class="filterClass(filter)" v-for="(filter, i) in filters" :key="i" @click="toggleFilter(filter)">{{ filter }} &nbsp;</span>
      </div>
      <div v-for="post in publishedPosts" :key="post.node.id" class="flex flex-col">
      <g-link :to="post.node.path" class="my-5 text-lg sm:text-xl md:text-2xl no-underline text-black hover:text-brand transition-1">
        <div class="flex justify-between">
          <div class="flex items-center">
            <span class="font-italic text-sm text-grey-dark mr-2 flex-no-shrink">{{ post.node.date.split('T')[0] }}</span> 
            <div class="flex flex-col">
                <!-- <span class="text-2xs text-orange-light">
                  {{ post.node.tags }}
                </span> -->
                <span>{{ post.node.title }}</span>
            </div>
          </div>
          <div class="self-center text-3xl">
           &#8594;
          </div>
        </div>
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
        tags
      }
    }
  }
}
</page-query>

<script>
export default {
  name: 'Home',
  data() {
    return {
      currentFilter: '',
    }
  },
  computed: {
    publishedPosts() {
      return this.$page.posts.edges.filter(post => {
        if (post.node.published == true) {
          if (this.currentFilter === '') {
            return true
          }
          const tags = post.node.tags.split(', ');
          
          if (tags.includes(this.currentFilter)) {
            return true;
          }
        }
        return false;
      })
    },
    filters() {
      const filters = [];
      filters.push('travels');
      filters.push('internship');

      return filters;
    },

  },

  methods: {
    toggleFilter(filter) {
      this.currentFilter = this.currentFilter === filter ? '' : filter;
    },

    filterClass(filter) {
      const classes = ['text-grey-dark', 'hover:text-brand', 'cursor-pointer', 'transition-1'];

      if (this.currentFilter === filter) {
        classes.shift();
        classes.push('text-brand');
      }

      return classes;
    },
  },
}
</script>

<style scoped>
.overview {
  min-height: 75vh;
}
</style>
