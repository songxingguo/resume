const os = navigator.userAgent.toLowerCase().indexOf("micromessenger");
document.querySelectorAll("a").forEach(function (t) {
  return t.setAttribute("target", "_blank");
}),
(window.printResume = function () {
  0 < os ? alert("微信无法打印，请使用手机浏览器访问") : window.print();
})
