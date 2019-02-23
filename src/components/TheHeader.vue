<template>
<header class="header z-10 bg-theme md:bg-transparent py-3 hover:shadow transition-1" :class="{shadow: $route.path === '/'}">
  <div class="pl-5">
    <g-link :to="{ name: 'home' }" class="text-brand sm:font-thin no-underline text-theme-hover transition-1">{{ $static.metaData.siteName }}</g-link>
  </div>
  <nav class="mx-5 text-right">
    <span class="text-brand cursor-pointer" @click="toggleTheme">Toggle dark mode</span>
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
  methods: {
    toggleTheme() {
      const root = document.documentElement;
      const currentTheme = getComputedStyle(root, null).getPropertyValue('--color-theme-bg');

      this.setTheme(root, currentTheme);
      localStorage.setItem('theme', currentTheme);
    },
    setTheme(root, currentTheme) {
      const darkColor = getComputedStyle(root, null).getPropertyValue('--color-dark');
      const lightColor = getComputedStyle(root, null).getPropertyValue('--color-light');
      let newThemeColorBg = darkColor; 
      let newThemeColorText = lightColor;

      if (currentTheme === darkColor) {
       newThemeColorBg = lightColor;
       newThemeColorText = darkColor;
      }

      root.style.setProperty('--color-theme-bg', newThemeColorBg);
      root.style.setProperty('--color-theme-text', newThemeColorText);
    },
  },
  mounted() {
    const preferredTheme = localStorage.getItem('theme');

    if (preferredTheme) {
      const root = document.documentElement;
      this.setTheme(root, preferredTheme);
    }
  }
}
</script>
