<template>
  <div class="project-container">
    <div class="project-item flex-row flex-wrap <%= item.mClass %>">
      <!-- 桌面设备 -->
      <div class="project-item-left flex-full not-for-print not-for-mb">
        <div class="flex-row flex-content-between flex-items-center">
          <div class="project-item__title">名称</div>
          <div class="project-item__desc">描述</div>
        </div>
        <div class="flex-row flex-wrap mt5">
          <div class="tech-item__label flex-row flex-all-center">标签</div>
        </div>
        <div class="resume-item__text mt10">
          内容
        </div>
      </div>
      <div class="project-img-container flex-row flex-items-center">
        <div class="project-item__img">
          <img>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>