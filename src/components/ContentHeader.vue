<template>
  <div class="flex-column flex-items-center not-for-print">
    <div class="resume-item__title">{{ title }}</div>
    <div class="resume-item__desc">{{desc}}</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,
  },
};
</script>

<style>
</style>