//JS for Disqus
function showdisqus() {
    if (document.getElementById("disqus_thread").style.display === "block") {
        document.getElementById("disqus_thread").style.display = "none";
      } else {
        document.getElementById("disqus_thread").style.display = "block";
      }
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


//JS for project browser. I found it on CodePen back in 2021.
//I can't seem to find it anymore...
document.addEventListener("DOMContentLoaded", function() {
  // get all tab pane divs within tab-header class
  let tabHeader = document.getElementsByClassName("tab-header")[0]
  if (!tabHeader) return; // exit script if tab-header class does not exist on page
  let tabPanes = tabHeader.getElementsByTagName("div");
  // loop through all tab panes and add click event
  for(let i=0;i<tabPanes.length;i++){
      tabPanes[i].addEventListener("click", function(){
          // on click, remove current active header, make clicked header active
          document.getElementsByClassName("tab-header")[0].getElementsByClassName("active-tab")[0].classList.remove("active-tab");
          tabPanes[i].classList.add("active-tab");
          // change tab indicator position based on index of pane clicked
          document.getElementsByClassName("tab-indicator")[0].style.top = `calc(25px + ${i*50}px)`;
          // swap active for tab content as well
          document.getElementsByClassName("tab-content")[0].getElementsByClassName("active-tab")[0].classList.remove("active-tab");
          document.getElementsByClassName("tab-content")[0].getElementsByTagName("div")[i*2].classList.add("active-tab");
      })
  }
});


//JS for sticky TOC in blog posts
document.addEventListener("DOMContentLoaded", function () {
  const tocContainer = document.getElementById("toc");
  if (!tocContainer) return;
  const headings = document.querySelectorAll("h1, h2, h3");
  const tocItems = [];
  headings.forEach((heading, index) => {
    // Add unique IDs if missing
    if (!heading.id) {
      heading.id = "heading-" + index;
    }
    // Create link
    const link = `<a href="#${heading.id}">${heading.textContent}</a>`;
    let indent = " class=''";
    if (heading.tagName === "H3") {
      indent = " class='indent1'";
    }
    tocItems.push(`<li${indent}>${link}</li>`);
  });
  // Build the TOC
  tocContainer.innerHTML = `<ul>${tocItems.join("")}</ul>`;
});