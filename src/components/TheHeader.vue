<template>
<header class="header py-3 hover:shadow transition-1" :class="{shadow: $route.path === '/'}">
  <div class="pl-5">
    <g-link :to="{ name: 'home' }" class="text-brand sm:font-thin no-underline hover:text-black transition-1">{{ $static.metaData.siteName }}</g-link>
  </div>
  <nav class="mx-5 text-right">
    <span class="text-brand">Currently doing an internship in Stockholm!</span>
  </nav>
</header>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'TheHeader',
}
</script>
