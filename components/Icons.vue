<template>
  <svg
    v-if="icon === 'email'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    style="enable-background: new 0 0 800 800"
    xml:space="preserve"
    :width="width"
    :color="color"
  >
    <path
      d="m127 690 223-176 71 60 72-60 223 176zm-20-17V328l222 170zm92-299-77-61 55-42V162h139l105-77 106 77h139v109l55 42-77 61V184H199zm537-46L514 498l222 175z"
    />
  </svg>

  <svg
    v-else-if="icon === 'development'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 79 79"
    style="enable-background: new 0 0 79 79"
    xml:space="preserve"
    :width="width"
    :color="color"
  >
    <path v-if="border" d="M75 4v71H4V4h71m4-4H0v79h79V0z" />

    <path
      d="M28.3 51.7 5.8 41.2v-2.4l22.5-12v3.7L10 39.7l18.3 8.2v3.8zm19.5-30.5L35.1 57.8h-3.9l12.7-36.5 3.9-.1zm2.9 26.7L69 39.8l-18.3-9.3v-3.7l22.5 12v2.4L50.7 51.7v-3.8z"
    />
  </svg>

  <svg
    v-else-if="icon === 'stonks'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 79 79"
    style="enable-background: new 0 0 79 79"
    xml:space="preserve"
    :width="width"
    :color="color"
  >
    <path v-if="border" d="M75 4v71H4V4h71m4-4H0v79h79V0z" />

    <path
      style="fill: none; stroke: #000; stroke-width: 5; stroke-miterlimit: 10"
      d="M11.1 62.8 29.2 43l7.8 9.9 16.2-19 6.7-7.9"
    />

    <path d="m55.6 24.2 12.3-8-5.3 13.6z" />
  </svg>

  <svg
    v-else-if="icon === 'pen'"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 79 79"
    style="enable-background: new 0 0 79 79"
    xml:space="preserve"
    :width="width"
    :color="color"
  >
    <path style="fill: none" d="M0 0h79v79H0z" />

    <path v-if="border" d="M75 4v71H4V4h71m4-4H0v79h79V0z" />

    <path
      d="m59.8 21.3-5.1-5.5-37 34-3.5 13.4 13.6-2.4 37-34-5-5.5m-32 39.5-10.1-11"
      style="fill: none; stroke: #000; stroke-width: 2; stroke-miterlimit: 10"
    />
  </svg>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Icons',

  props: {
    icon: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '5rem',
    },
    color: {
      type: String,
      default: '',
    },
    border: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
svg {
  fill: var(--black);
  path: {
    fill: inherit;
  }
}
</style>
