const menus = document.querySelectorAll("nav > ul > li > span");
const subMenus = document.querySelectorAll(".menu-sub-wrap");

menus.forEach((menu) => {
  menu.addEventListener("click", (e) => {
    e.stopPropagation();

    const submenu = menu.nextElementSibling;

    subMenus.forEach((el) => {
      if (el !== submenu) {
        el.classList.remove("active");
      }
    });

    if (submenu) {
      submenu.classList.toggle("active");
    }

  });
});

// 메뉴 외부 클릭 시 닫기
document.addEventListener("click", () => {
  subMenus.forEach((submenu) => {
    submenu.classList.remove("active");
  });
});