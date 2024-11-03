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


//JS for project browser
//get all of the tab panes (divs) within tab-header
let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

//add click event to all panes
for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click", function(){
        //on click, remove current active header, make clicked header active
        _class("tab-header")[0].getElementsByClassName("active-tab")[0].classList.remove("active-tab");
        tabPanes[i].classList.add("active-tab");

        //change tab indicator position based on index of pane clicked
        _class("tab-indicator")[0].style.top = `calc(25px + ${i*50}px)`;

        //swap active for tab content as well
        _class("tab-content")[0].getElementsByClassName("active-tab")[0].classList.remove("active-tab");
        _class("tab-content")[0].getElementsByTagName("div")[i*2].classList.add("active-tab");
    })
}


//JS for hamburger menu
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

