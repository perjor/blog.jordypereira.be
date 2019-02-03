<template>
  <div class="layout">
    <header class="header bg-brand">
      <div class="pl-5">
        <g-link :to="{ name: 'home' }" class="text-white no-underline hover:text-black transition-1">{{ $static.metaData.siteName }}</g-link>
      </div>
      <nav>
        <span class="text-white mx-5">Currently doing an internship in Stockholm!</span>
        <!-- <g-link class="mx-5 inline text-black" :to="{ name: 'home' }">Check out the pictures</g-link> -->
      </nav>
    </header>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
body {
  @apply font-sans;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}
</style>
