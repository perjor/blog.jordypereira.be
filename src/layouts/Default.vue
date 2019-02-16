<template>
  <div class="layout">
    <header class="header bg-brand py-3">
      <div class="pl-5">
        <g-link :to="{ name: 'home' }" class="text-white no-underline hover:text-black transition-1">{{ $static.metaData.siteName }}</g-link>
      </div>
      <nav class="mx-5 text-right">
        <span class="text-white">Currently doing an internship in Stockholm!</span>
        <!-- <g-link class="mx-5 inline text-black" :to="{ name: 'home' }">Check out the pictures</g-link> -->
      </nav>
    </header>
    <div class="container">
      <slot/>
    </div>
    <TheFooter />
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import TheFooter from '../components/TheFooter';

export default {
  name: 'DefaultLayout',
  components: {
    TheFooter,
  },
}
</script>


<style>
body {
  @apply font-sans;
  min-height: 100vh;
  height: 100vh;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  min-height: 50px;
}

.container {
  min-height: 70vh;
}

@screen sm {
  .container {
    /* min-height: 80vh; */
  }
}
</style>
