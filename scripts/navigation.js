const open_menu = document.getElementById("open-menu");
const close_menu = document.getElementById("close-menu");
const navigation = document.getElementById("main-menu");

const menu_links = document.querySelectorAll("nav li");
menu_links.forEach(function (menu_link) {
  menu_link.addEventListener("click", function (element) {
    console.log(element);
  });
});

open_menu.addEventListener("click", function () {
  navigation.classList.remove("closed");
  open_menu.classList.add("hidden");
  close_menu.classList.remove("hidden");
});

close_menu.addEventListener("click", function () {
  navigation.classList.add("closed");
  close_menu.classList.add("hidden");
  open_menu.classList.remove("hidden");
});
