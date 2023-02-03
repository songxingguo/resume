<template>
  <div id="resume">
    <ResumeHeader></ResumeHeader>
    <!-- 内容区域 -->
    <ResemeContent></ResemeContent>
    <!-- 底部区域 -->
    <ResumeFooter></ResumeFooter>
  </div>
</template>

<script>
import ResumeHeader from "./components/ResumeHeader.vue";
import ResumeFooter from "./components/ResumeFooter.vue";
import ResemeContent from "./components/ResemeContent.vue";
export default {
  components: {
    ResumeHeader,
    ResumeFooter,
    ResemeContent,
  },
};
</script>

<style>
#app,
#resume {
  height: 100vh;
}
</style>