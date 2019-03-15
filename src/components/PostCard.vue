<template>
  <div class="flex flex-col">
    <g-link :to="post.path" class="my-5 text-lg sm:text-xl md:text-2xl no-underline text-theme hover:text-brand transition-1">
      <div class="flex justify-between">
        <div class="flex items-center">
          <span class="font-italic text-sm text-grey-dark mr-2 flex-no-shrink">{{ post.date }}</span> 
          <div>
            <span>{{ post.title }}</span>
            <p class="text-sm mt-2">{{ post.description }}</p>
          </div>
        </div>
        <div class="self-center text-3xl">
          &#8594;
        </div>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  name: 'PostCard',
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>
