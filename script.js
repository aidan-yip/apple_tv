"use strict";

//Page body
const body = document.body;

//Background
const background = document.getElementById("background");

//Scroll container
const scroll_container = document.getElementById("scroll_container");

//Homebar
const home_bar = document.getElementById("home_bar");

//App icons global
const app_icon = document.getElementsByClassName("app_icon");
const app_icon_scroll = document.getElementsByClassName("app_icon_scroll");

//App icons

//Homebar
const appstore = document.getElementById("appstore");
const facetime = document.getElementById("facetime");
const photos = document.getElementById("photos");
const settings = document.getElementById("settings");
const arcade = document.getElementById("arcade");

//row 1
const youtube = document.getElementById("youtube");
const instagram = document.getElementById("instagram");
const twitter = document.getElementById("twitter");
const facebook = document.getElementById("facebook");
const google = document.getElementById("google");

//row 3
const pq = document.getElementById("pq");
const party = document.getElementById("party");

const github = document.getElementById("github");

//inputs
const color_input = document.getElementById("color_input");
const brightness_range = document.getElementById("brightness_range");

//Tab index
for (let i = 0; i < app_icon.length; i++) {
  app_icon[i].tabIndex = 0;
}

for (let i = 0; i < app_icon_scroll.length; i++) {
  app_icon_scroll[i].tabIndex = 0;
}

//Brightness
brightness_range.addEventListener("change", function (e) {
  background.style.filter = "brightness(" + e.target.value + "%)";
  home_bar.style.filter = "brightness(" + e.target.value + "%)";
  scroll_container.style.filter = "brightness(" + e.target.value + "%)";
});

//Theme
color_input.addEventListener("change", function (e) {
  // App icons
  for (let i = 0; i < app_icon.length; i++) {
    app_icon[i].style.background = e.target.value;
    app_icon[i].style.filter = "contrast(95%)";
  }
  for (let i = 0; i < app_icon_scroll.length; i++) {
    app_icon_scroll[i].style.background = e.target.value;
    app_icon_scroll[i].style.filter = "contrast(95%)";
  }
});

//app hover background changes
appstore.onmouseover = () => {
  home_bar.style.borderTopLeftRadius = "30px";
  home_bar.style.borderBottomLeftRadius = "30px";
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-app-store-500.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "0%";
  background.style.backgroundSize = "600px 600px";
  background.style.backgroundColor = "#7bcdff";
};

appstore.onmouseleave = () => {
  home_bar.style.borderTopLeftRadius = "45px";
  home_bar.style.borderBottomLeftRadius = "45px";
};

facetime.onmouseover = () => {
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-facetime-500.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "0%";
  background.style.backgroundSize = "600px 600px";
  background.style.backgroundColor = "rgb(143, 238, 194)";
};

photos.onmouseover = () => {
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-ios-photos-480.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "20%";
  background.style.backgroundSize = "400px 400px";
  background.style.backgroundColor = "rgb(240, 240, 240)";
};

settings.onmouseover = () => {
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-settings-480.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "20%";
  background.style.backgroundSize = "400px 400px";
  background.style.backgroundColor = "rgb(200, 200, 200)";
};

arcade.onmouseover = () => {
  home_bar.style.borderTopRightRadius = "30px";
  home_bar.style.borderBottomRightRadius = "30px";
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-apple-arcade-480.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "20%";
  background.style.backgroundSize = "400px 400px";
  background.style.backgroundColor = "rgba(255, 80, 80, 1)";
};

arcade.onmouseleave = () => {
  home_bar.style.borderTopRightRadius = "45px";
  home_bar.style.borderBottomRightRadius = "45px";
};

home_bar.onmouseleave = () => {
  home_bar.style.borderTopLeftRadius = "45px";
  home_bar.style.borderBottomLeftRadius = "45px";
  //Change background back to default
  background.style.backgroundPosition = "center";
  background.style.backgroundSize = "cover";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    background.style.backgroundImage = "url(public/DSC00151.JPG)";
  } else {
    background.style.backgroundImage = "url(public/IMG_4463.jpeg)";
  }
};

//Link onclick events

//Homebar
appstore.onclick = () => {
  location.href = "https://www.apple.com/ca/app-store/";
};

//Enter = onClick event
appstore.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    appstore.click();
  }
});

facetime.onclick = () => {
  location.href = "https://apps.apple.com/ca/app/facetime/id1110145091";
};

//Enter = onClick event
facetime.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    facetime.click();
  }
});

photos.onclick = () => {
  location.href = "https://www.icloud.com/photos/";
};

//Enter = onClick event
photos.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    photos.click();
  }
});

settings.onclick = () => {
  location.href = "https://www.icloud.com/settings";
};

//Enter = onClick event
settings.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    settings.click();
  }
});

arcade.onclick = () => {
  location.href = "https://www.apple.com/ca/apple-arcade/";
};

//Enter = onClick event
arcade.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    arcade.click();
  }
});

/* row 1 */
youtube.onclick = () => {
  location.href = "https://www.youtube.com";
};

//Enter = onClick event
youtube.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    youtube.click();
  }
});

instagram.onclick = () => {
  location.href = "https://www.instagram.com";
};

//Enter = onClick event
instagram.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    instagram.click();
  }
});

facebook.onclick = () => {
  location.href = "https://www.facebook.com";
};

//Enter = onClick event
facebook.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    facebook.click();
  }
});

twitter.onclick = () => {
  location.href = "https://x.com";
};

//Enter = onClick event
twitter.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    twitter.click();
  }
});

google.onclick = () => {
  location.href = "https://www.google.com";
};

//Enter = onClick event
google.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    google.click();
  }
});

/* row 3 */
pq.onclick = () => {
  location.href = "https://perilous-quest.netlify.app";
};

//Enter = onClick event
pq.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    pq.click();
  }
});

party.onclick = () => {
  location.href = "https://party-time64.web.app";
};

//Enter = onClick event
party.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    party.click();
  }
});

github.onclick = () => {
  location.href = "https://github.com/aidan-yip";
};

//Enter = onClick event
github.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    github.click();
  }
});

/*
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    background.style.backdropFilter = "blur(7px)";
  } else {
    background.style.backdropFilter = "blur(0px)";
  }
}
*/
