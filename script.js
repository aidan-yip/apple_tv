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

//row 2
const music = document.getElementById("music");
const podcasts = document.getElementById("podcasts");
const spotify = document.getElementById("spotify");
const soundcloud = document.getElementById("soundcloud");
const band = document.getElementById("band");

//row 3
const pq = document.getElementById("pq");
const party = document.getElementById("party");

const github = document.getElementById("github");

//row 4
const apple = document.getElementById("apple");
const apple_img = document.getElementById("apple_img");

//folder
const app_folder = document.getElementById("app_folder");
const folder_open = document.getElementById("app_folder_open");

//inputs
const color_input = document.getElementById("color_input");
const brightness_range = document.getElementById("brightness_range");

window.onload = () => {
  folder_open.style.pointerEvents = "none";
  updateVolume();
  //Light/Dark theme
  function activateDarkMode() {
    apple_img.src = "./public/app_icons/icons8-apple-480-light.png";
  }

  function activateLightMode() {
    apple_img.src = "./public/app_icons/icons8-apple-480-dark.png";
  }

  // MediaQueryList
  const darkModePreference = window.matchMedia("(prefers-color-scheme: dark)");

  darkModePreference.addEventListener(
    "change",
    (e) => e.matches && activateDarkMode()
  );

  // MediaQueryList
  const lightModePreference = window.matchMedia(
    "(prefers-color-scheme: light)"
  );

  lightModePreference.addEventListener(
    "change",
    (e) => e.matches && activateLightMode()
  );
};

//Tab index
for (let i = 0; i < app_icon.length; i++) {
  app_icon[i].tabIndex = 0;
}

for (let i = 0; i < app_icon_scroll.length; i++) {
  app_icon_scroll[i].tabIndex = 0;
}

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    play_scroll_fx();
  } else {
    null;
  }
}

//Brightness
brightness_range.addEventListener("change", function (e) {
  background.style.filter = "brightness(" + e.target.value + "%)";
  home_bar.style.filter = "brightness(" + e.target.value + "%)";
  scroll_container.style.filter = "brightness(" + e.target.value + "%)";
  play_scroll_fx();
});

//Volume
function updateVolume() {
  const newVolume = document.getElementById("volume").value;
  document
    .querySelectorAll("video, audio, embed, object")
    .forEach((element) => (element.volume = newVolume));
  console.log(newVolume);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("volume").addEventListener("input", updateVolume);
});

//Theme
color_input.addEventListener("change", function (e) {
  // App icons
  for (let i = 0; i < app_icon.length; i++) {
    app_icon[i].style.background = e.target.value;
    app_icon[i].style.filter = "contrast(95%)";
    play_scroll_fx();
  }
  for (let i = 0; i < app_icon_scroll.length; i++) {
    app_icon_scroll[i].style.background = e.target.value;
    app_icon_scroll[i].style.filter = "contrast(95%)";
  }
});

// sound on mouse hover
let hover_fx = document.getElementById("hover_fx");

function play_hover_fx() {
  hover_fx.currentTime = 0;
  hover_fx.play();
  console.log("playing hover fx");
}

for (let i = 0; i < app_icon.length; i++) {
  app_icon[i].addEventListener("mouseover", play_hover_fx);
}

for (let i = 0; i < app_icon_scroll.length; i++) {
  app_icon_scroll[i].addEventListener("mouseover", play_hover_fx);
}

// Play sound on scroll
let scroll_fx = document.getElementById("scroll_fx");

function play_scroll_fx() {
  scroll_fx.currentTime = 0;
  scroll_fx.play();
  scroll_fx.loop = false;
  console.log("playing scroll fx");
}

//app hover background changes
appstore.onmouseover = () => {
  home_bar.style.borderTopLeftRadius = "30px";
  home_bar.style.borderBottomLeftRadius = "30px";
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-app-store-500.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "20%";
  background.style.backgroundSize = "400px 400px";
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
  background.style.backgroundPositionY = "20%";
  background.style.backgroundSize = "400px 400px";
  background.style.backgroundColor = "rgb(143, 238, 194)";
  play_hover_fx();
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
    apple_img.src = "./public/app_icons/icons8-apple-480-light.png";
  } else {
    background.style.backgroundImage = "url(public/IMG_4463.jpeg)";
  }
};

//Link onclick events

//folder
app_folder.onclick = () => {
  folder_open.style.opacity = "1";
  folder_open.style.pointerEvents = "all";
  scroll_container.style.filter = "brightness(40%)";
  home_bar.style.filter = "brightness(40%)";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    body.style.background = "rgb(15, 15, 15)";
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    body.style.background = "rgba(93, 93, 93, 0.94)";
  }
  console.log("folder opened");
};

folder_open.onmouseleave = () => {
  folder_open.style.opacity = "0";
  folder_open.style.pointerEvents = "none";
  scroll_container.style.filter = "brightness(100%)";
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    body.style.background = "rgb(38, 38, 38)";
  }
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: light)").matches
  ) {
    body.style.background = "rgba(255, 255, 255, 0.94)";
  }
  home_bar.style.filter = "brightness(100%)";
};

//Homebar
appstore.onclick = () => {
  location.href = "https://www.apple.com/ca/app-store/";
};

//Enter = onClick event
appstore.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    appstore.click();
  }
});

facetime.onclick = () => {
  location.href = "https://apps.apple.com/ca/app/facetime/id1110145091";
};

//Enter = onClick event
facetime.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    facetime.click();
  }
});

photos.onclick = () => {
  location.href = "https://www.icloud.com/photos/";
};

//Enter = onClick event
photos.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    photos.click();
  }
});

settings.onclick = () => {
  location.href = "https://www.icloud.com/settings";
};

//Enter = onClick event
settings.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    settings.click();
  }
});

arcade.onclick = () => {
  location.href = "https://www.apple.com/ca/apple-arcade/";
};

//Enter = onClick event
arcade.addEventListener("keypress", function (event) {
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
youtube.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    youtube.click();
  }
});

instagram.onclick = () => {
  location.href = "https://www.instagram.com";
};

//Enter = onClick event
instagram.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    instagram.click();
  }
});

facebook.onclick = () => {
  location.href = "https://www.facebook.com";
};

//Enter = onClick event
facebook.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    facebook.click();
  }
});

twitter.onclick = () => {
  location.href = "https://x.com";
};

//Enter = onClick event
twitter.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    twitter.click();
  }
});

google.onclick = () => {
  location.href = "https://www.google.com";
};

//Enter = onClick event
google.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    google.click();
  }
});

/* row 2 */
music.onclick = () => {
  location.href = "https://music.apple.com/us/artist/newave-oceans/1497172775";
};

//Enter = onClick event
music.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    music.click();
  }
});

podcasts.onclick = () => {
  location.href = "https://www.apple.com/apple-podcasts/";
};

//Enter = onClick event
podcasts.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    podcasts.click();
  }
});

spotify.onclick = () => {
  location.href = "https://open.spotify.com/artist/5Aq8y8dTIBYzng6ZZucQQ1";
};

//Enter = onClick event
spotify.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    spotify.click();
  }
});

//Enter = onClick event
soundcloud.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    soundcloud.click();
  }
});

soundcloud.onclick = () => {
  location.href = "https://soundcloud.com/newaveoceans";
};

band.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    band.click();
  }
});

band.onclick = () => {
  location.href = "https://newaveoceans.bandcamp.com";
};

/* row 3 */
pq.onclick = () => {
  location.href = "https://perilous-quest.netlify.app";
};

//Enter = onClick event
pq.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    pq.click();
  }
});

party.onclick = () => {
  location.href = "https://party-time64.web.app";
};

//Enter = onClick event
party.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    party.click();
  }
});

github.onclick = () => {
  location.href = "https://github.com/aidan-yip";
};

//Enter = onClick event
github.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    github.click();
  }
});

/* row 3 */
apple.onclick = () => {
  location.href = "https://www.apple.com/ca/store";
};

//Enter = onClick event
apple.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    apple.click();
  }
});
