<template>
  <div class="social-icons">
    <a
      v-for="(icon, iconIndex) of icons"
      :key="iconIndex"
      :href="icon.href"
      rel="noreferrer noopener"
      target="_blank"
    >
      <i :class="icon.class"></i>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'SocialIcons',
  data() {
    return {
      icons: [
        {
          href: 'https://github.com/Hougesen/',
          class: 'fab fa-github-square fa-3x',
        },
        {
          href: 'https://www.linkedin.com/in/mads-hougesen-78733016a/',
          class: 'fab fa-linkedin fa-3x fa-fw',
        },
        {
          href: 'https://www.behance.net/MadsHougesen/',
          class: 'fab fa-behance-square fa-3x',
        },
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.fab {
  margin: auto;
  color: black;
}

.fa-linkedin:hover,
.fa-github-square:hover,
.fa-behance-square:hover {
  color: var(--highlight-color);
}
</style>
