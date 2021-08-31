<template>
  <div>
    <Hero @changeHighlight="randomHighlightColor" />

    <Projects />

    <!-- <Skills @changeHighlight="randomHighlightColor" /> -->

    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    /**
     * @summary generate a random color and set the css root variable "--highlight-color" as the color
     */
    randomHighlightColor(): void {
      const root = document.documentElement;
      const min = 70;
      const max = 360;
      const color = `hsla( ${Math.floor(
        Math.random() * (max - min) + min,
      )}, 80%, 50%, 1)  `;

      root.style.setProperty('--highlight-color', color);
    },
  },
});
</script>
