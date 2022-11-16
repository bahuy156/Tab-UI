var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var tabChild = $$(".tab-child");
var contentChild = $$(".content-child");

var tabActive = $(".tab-child.active");
var line = $(".line");

var moveLineItem = (tabItemActive) => {
  line.style.left = tabItemActive.offsetLeft + "px";
  line.style.width = tabItemActive.offsetWidth + "px";
};
moveLineItem(tabActive);

tabChild.forEach((tab, index) => {
  var contentChild2 = contentChild[index];

  tab.onclick = function () {
    $(".tab-child.active").classList.remove("active");
    $(".content-child.active").classList.remove("active");

    moveLineItem(this);

    this.classList.add("active");
    contentChild2.classList.add("active");
  };
});
