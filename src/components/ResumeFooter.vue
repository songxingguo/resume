<template>
  <footer class="resume-footer sticky">
    <div class="resume-footer__desc flex-row flex-items-center">
      <img src="地址"
        alt="二维码">
      <span class="ml20">您可以使用「微信」扫描二维码<br />
        <span class="not-for-print not-for-mb">扫描</span>
        <span class="not-for-pc not-for-mb">打印</span>
      </span>
    </div>
    <div class="resume-footer__desc flex-column flex-content-center flex-items-end">
      <div>更新</div>
      <div>感谢您的阅读，相信这是难得的相遇</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.resume-footer {
  border-top: solid 1px #eeeeee;
  box-sizing: border-box;
  .resume-footer__desc {
    font-size: 14px;
    color: #999;
  }
  img {
    width: 10%;
    height: 10%;
  }
  &.sticky {
    position: sticky;
    bottom: 0;
    z-index: 100;
    background-color: #fff;
  }
}
</style>