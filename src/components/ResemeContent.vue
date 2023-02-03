<template>
  <div class="resume__content">
    <div class="resume-item">
      <ContentHeader></ContentHeader>
      <Project></Project>
    </div>
    <div class="resume-item">
      <ContentHeader></ContentHeader>
    </div>
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader.vue";
import Project from "./project/index.vue";
export default {
  components: { ContentHeader, Project },
};
</script>

<style>
.resume__content {
  height: 100%;
  padding: 0 10px;
}
</style>