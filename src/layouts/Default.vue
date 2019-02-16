<template>
  <div class="min-h-screen flex flex-col">
    <TheHeader />
    <div class="container flex-1 pt-5">
      <slot/>
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '../components/TheFooter';
import TheHeader from '../components/TheHeader';

export default {
  name: 'DefaultLayout',
  components: {
    TheFooter,
    TheHeader,
  },
}
</script>


<style>
body {
  @apply font-sans;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
}
</style>
