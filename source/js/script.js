function initMap() {
  var uluru = {
    lat: 34.87,
    lng: -111.763
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 9,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });
}

var map = document.getElementById("map");
//var btnClose = document.getElementById("close-btn");
var btnOpen = document.querySelector(".menu-btn--open");
var btnClose = document.querySelector(".menu-btn--close");
var siteNav = document.querySelector(".site-nav");

if (map) {
  map.classList.remove("map--no-js");
}

if (btnClose.classList.contains("menu-btn--no-js")) {
  btnClose.classList.remove("menu-btn--no-js");
}

//Ругается на условие?
//if (siteNav.classList.contains("site-nav--hide")) = false {
  siteNav.classList.add("site-nav--hide");
//}

btnOpen.addEventListener("click", function (evt) {
  evt.preventDefault();
  //if !(siteNav.classList.contains("site-nav--hide")) {
    siteNav.classList.remove("site-nav--hide");
  //}
});

btnClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  siteNav.classList.add("site-nav--hide");
});
