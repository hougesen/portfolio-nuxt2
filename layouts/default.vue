<template>
  <div>
    <Nav />
    <Nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;700&display=swap');
$mobileBreakpoint: 600px;
$tabletBreakpoint: 1367px;
:root {
  --black: #101010;
  --highlight-color: #ff142e;
}

* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  transition: 0.4s;
  line-height: 1.6;
}

*:before,
*:after {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  line-height: 1.6;
}

html {
  scroll-behavior: smooth;
}

body,
html {
  font-family: 'Open Sans', sans-serif;
  height: 100%;
  padding-top: 0;
  width: 100%;
  color: var(--black);
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Montserrat', sans-serif;
}

#homepage {
  margin: auto;
  background-image: url('./assets/background.svg');
  background-repeat: no-repeat;
  background-position: top;
}
h1 {
  font-size: clamp(1rem, -0.875rem + 8.333vw, 3.5rem); //3.5rem;
  margin-bottom: 1rem;
  text-transform: uppercase;

  @media screen and (max-width: $tabletBreakpoint) {
    font-size: 2rem;
  }
}

h2 {
  font-size: 1.7rem;
  @media screen and (min-width: $tabletBreakpoint) {
    font-size: 2rem;
  }
}

.subheading {
  font-size: 1.2rem;
}

.default-width {
  margin: 0 6% 5rem 6%;

  @media screen and (min-width: $tabletBreakpoint) {
    margin: 0 10% 5rem 10%;
  }
}
</style>
