<template>
  <Layout>
    <div class="overview">
      <div class="filters flex justify-center text-xs">
        <span :class="filterTogglerClasses" @click="toggleFilter('')">{{ this.currentFilter ? 'Clear filter' : 'Filter on:' }}</span><span :class="filterClass(filter)" v-for="(filter, i) in filters" :key="i" @click="toggleFilter(filter)">{{ filter.title }} &nbsp;</span>
      </div>
      
      <PostCard v-for="post in publishedPosts" :key="post.node.id" :post="post.node"></PostCard>
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
        date (format: "D MMM")
        published
        tags {
          id
          title
          path
        }
        description
      }
    }
  }
}
</page-query>

<script>
import PostCard from '../components/PostCard'

export default {
  name: 'Home',
  metaInfo: {
    title: 'Overview'
  },
  components: {
    PostCard,
  },
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
          
          if (post.node.tags.some(tag => tag.title === this.currentFilter.title)) {
            return true;
          }
        }
        return false;
      })
    },
    filters() {
      const filters = [];
      filters.push({title: 'travels'});
      filters.push({title:'internship'});

      return filters;
    },

    filterTogglerClasses() {
      const classes = ['mr-2', 'text-theme'];

      if (this.currentFilter) {
        classes.push('hover:text-brand');
        classes.push('cursor-pointer');
        classes.push('transition-1');
        classes.push('select-none');
      }

      return classes;
    },

  },

  methods: {
    toggleFilter(filter) {
      this.currentFilter = this.currentFilter === filter ? '' : filter;
    },

    filterClass(filter) {
      const classes = ['text-grey-dark', 'hover:text-brand', 'cursor-pointer', 'transition-1', 'select-none'];

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
