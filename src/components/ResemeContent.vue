<template>
  <div class="resume__content">
    <div class="resume-item"
      :key="content.name"
      v-for="content in contentMap">
      <ContentHeade :title="content.title"
        :desc="content.desc"></ContentHeade>
      <Project></Project>
    </div>
  </div>
</template>

<script>
import ContentHeader from "./ContentHeader.vue";
import Project from "./project/index.vue";
import { initData } from "./../stores/data";
export default {
  components: { ContentHeader, Project },
  data() {
    return {
      contentMap: initData().contentMap,
    };
  },
};
</script>

<style>
.resume__content {
  height: 100%;
  padding: 0 10px;
}
</style>