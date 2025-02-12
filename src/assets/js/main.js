/* 0. Xử lý tải phần header */
const fetchHeader = async () => {
  try {
    const res = await fetch("../../template/header.html");
    const data = await res.text();
    document.getElementById("header").innerHTML = data;

    handleToggleMenu();
  } catch (error) {
    console.log(error.message);
  }
};

/* 1. Xử lý phần Header */
const handleToggleMenu = () => {
  const toggler = document.getElementById("more-toggle");
  const headerMobile = document.getElementById("headerMobile");
  const arrowMobile = document.getElementById("arrow-mobile");
  const navbarMobile = document.getElementById("navbarMobile");

  toggler.addEventListener("click", () => {
    navbarMobile.classList.remove("ct-mobile-navbar-hidden");
    headerMobile.classList.add("ct-mobile-header-show");
    navbarMobile.classList.add("ct-mobile-navbar-show");
  });

  arrowMobile.addEventListener("click", () => {
    navbarMobile.classList.remove("ct-mobile-navbar-show");
    headerMobile.classList.remove("ct-mobile-header-show");
    navbarMobile.classList.add("ct-mobile-navbar-hidden");
  });
};

const app = () => {
  fetchHeader();
};

app();
