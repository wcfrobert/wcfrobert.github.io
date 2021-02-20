function showdisqus() {
    if (document.getElementById("disqus_thread").style.display === "block") {
        document.getElementById("disqus_thread").style.display = "none";
      } else {
        document.getElementById("disqus_thread").style.display = "block";
      }
}


function _class(name){
    return document.getElementsByClassName(name);
}

// get all of the tab panes (divs) within tab-header
let tabPanes = _class("tab-header")[0].getElementsByTagName("div");

// add click event to all panes
for(let i=0;i<tabPanes.length;i++){
    tabPanes[i].addEventListener("click", function(){
        // on click, remove current active header, make clicked header active
        _class("tab-header")[0].getElementsByClassName("active-tab")[0].classList.remove("active-tab");
        tabPanes[i].classList.add("active-tab");

        // change tab indicator position based on index of pane clicked
        _class("tab-indicator")[0].style.top = `calc(25px + ${i*50}px)`;

        // swap active for tab content as well
        _class("tab-content")[0].getElementsByClassName("active-tab")[0].classList.remove("active-tab");
        _class("tab-content")[0].getElementsByTagName("div")[i*2].classList.add("active-tab");

    })
}


