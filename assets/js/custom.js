function _class(name){
    return document.getElementsByClassName(name);
}



//JS for Disqus
function showdisqus() {
    if (document.getElementById("disqus_thread").style.display === "block") {
        document.getElementById("disqus_thread").style.display = "none";
      } else {
        document.getElementById("disqus_thread").style.display = "block";
      }
}



//Header javascript for hamburger menu
//https://codepen.io/AleksandrHovhannisyan/pen/xxwWama
const navbar = document.getElementById("navbar");
const navbarToggle = navbar.querySelector(".navbar-toggle");
function openMobileNavbar() {
  navbar.classList.add("opened");
  navbarToggle.setAttribute("aria-label", "Close navigation menu.");
}

function closeMobileNavbar() {
  navbar.classList.remove("opened");
  navbarToggle.setAttribute("aria-label", "Open navigation menu.");
}

navbarToggle.addEventListener("click", () => {
  if (navbar.classList.contains("opened")) {
    closeMobileNavbar();
  } else {
    openMobileNavbar();
  }
});

