<template>
  <section id="skills" class="default-width">
    <h1 class="section-titel">Skillset</h1>
    <div class="skills-grid">
      <div class="skills-item">
        <Icons icon="development" />

        <h2>
          Frontend
          <br />
          <span @mouseover="changeHighlightColor">&</span> design
        </h2>
        <p class="subheading">
          I enjoy designing UI projects in Adobe Xd. When developing projects I
          normally use Vue.js & SCSS. I have also played around with Wordpress
          and Gridsome.
        </p>
      </div>

      <div class="skills-item">
        <Icons icon="pen" />

        <h2>
          Backend
          <br />
          <span @mouseover="changeHighlightColor">&</span> fullstack
        </h2>
        <p class="subheading">
          I have experience in Node.js, Express, PHP, MySQL, MongoDB & Docker.
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Skills',
  methods: {
    changeHighlightColor() {
      this.$emit('changeHighlight')
    },
  },
})
</script>

<style lang="scss" scoped>
$mobileBreakpoint: 600px;
$tabletBreakpoint: 1367px;

.skills-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2em;
  .skills-item {
    margin-right: 10%;
    @media screen and (min-width: $mobileBreakpoint) {
      margin-right: 20%;
    }
    span {
      color: var(--highlight-color);
    }
    .skills-img {
      display: block;
      width: 100px;
      text-align: left;
      @media screen and (min-width: $mobileBreakpoint) {
        width: 125px;
      }
    }
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /*   @media screen and (min-width: $tabletBreakpoint) {
    grid-template-columns: repeat(2, 1fr);
  } */
}
</style>
