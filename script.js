"use strict";

// Mobile Alert

function check_mobile() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    alert("This page works best on a desktop/laptop.");
    console.log("mobile browser");
  } else {
    console.log("desktop browser");
  }
}

let isMobile =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );

if (isMobile) {
  if (window.innerHeight > window.innerWidth) {
    alert("Please rotate to Landscape!");
  }
  console.log("Mobile device detected");
}

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
const app_icon_no_sound = document.getElementsByClassName("app_icon_no_sound");

//images global
const images = document.querySelectorAll("img");

//images
const apple_img = document.getElementById("apple_img");
const wiki_img = document.getElementById("wiki_img");
const airpods_img = document.getElementById("airpods_img");
const instagram_img = document.getElementById("instagram_img");

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
const airpods = document.getElementById("airpods");
const apple_tv = document.getElementById("apple_tv");

//folder
const folder_back = document.getElementById("folder_back");
const app_folder = document.getElementById("app_folder");
const folder_open = document.getElementById("app_folder_open");

//Folder inner

//row 1
const mac = document.getElementById("mac");
const ios = document.getElementById("ios");
const findmy = document.getElementById("findmy");
//row 2
//row 3
const newave = document.getElementById("newave");
const skrem = document.getElementById("skrem");
const audio_tri = document.getElementById("audio_tri");

//inputs
const color_input = document.getElementById("color_input");
const brightness_range = document.getElementById("brightness_range");

window.onload = () => {
  //Keep folder popup from preventing mouse events on scroll container
  folder_open.style.pointerEvents = "none";
  //Check Darkmode every 5 seconds
  setInterval(function () {
    //Folder background color sync with system theme
    //dark
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      body.style.background = "rgb(38, 38, 38)";
      activateDarkMode();
    }
    //light
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches
    ) {
      body.style.background = "rgba(255, 255, 255, 0.94)";
    }
    //log
    console.log("Theme check active");
  }, 50);

  //Light/Dark theme
  function activateDarkMode() {
    apple_img.src = "./public/app_icons/icons8-apple-480-light.png";
    wiki_img.src = "public/app_icons/icons8-wikipedia-512_light.png";
    airpods_img.src = "./public/app_icons/icons8-airpods-3-100_light.png";
    instagram_img.src = "./public/app_icons/insta_dark.png";
  }

  function activateLightMode() {
    apple_img.src = "./public/app_icons/icons8-apple-480-dark.png";
    wiki_img.src = "public/app_icons/icons8-wikipedia-512_dark.png";
    airpods_img.src = "./public/app_icons/icons8-airpods-3-100.png";
    instagram_img.src = "./public/app_icons/icons8-instagram-512.png";
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
  folder_back.style.filter = "brightness(" + e.target.value + "%)";
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
  play_hover_fx();
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
  for (let i = 0; i < app_icon_no_sound.length; i++) {
    app_icon_no_sound[i].style.background = e.target.value;
  }
  for (let i = 0; i < images.length; i++) {
    images[i].classList.add("color_blend");
  }
  apple_img.src = "./public/app_icons/icons8-apple-480-light.png";
  wiki_img.src = "public/app_icons/icons8-wikipedia-512_light.png";
  instagram_img.src = "./public/app_icons/icons8-instagram-512.png";
  airpods_img.src = "./public/app_icons/icons8-airpods-3-100_light.png";
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
  home_bar.style.borderTopLeftRadius = "35px";
  home_bar.style.borderBottomLeftRadius = "35px";
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-app-store-500.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "20%";
  background.style.backgroundSize = "400px 400px";
  background.style.backgroundColor = "rgb(72, 185, 255)";
  console.log("Corner radius expand");
};

appstore.onmouseleave = () => {
  home_bar.style.borderTopLeftRadius = "53px";
  home_bar.style.borderBottomLeftRadius = "53px";
  console.log("Corner radius contract");
};

facetime.onmouseover = () => {
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-facetime-500-fill.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "20%";
  background.style.backgroundSize = "400px 400px";
  background.style.backgroundColor = "rgb(115, 217, 106)";
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
  home_bar.style.borderTopRightRadius = "35px";
  home_bar.style.borderBottomRightRadius = "35px";
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-apple-arcade-480.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
  background.style.backgroundPositionY = "20%";
  background.style.backgroundSize = "400px 400px";
  background.style.backgroundColor = "rgba(255, 80, 80, 1)";
  console.log("Corner radius expand");
};

arcade.onmouseleave = () => {
  home_bar.style.borderTopRightRadius = "53px";
  home_bar.style.borderBottomRightRadius = "53px";
  console.log("Corner radius contract");
};

home_bar.onmouseleave = () => {
  home_bar.style.borderTopLeftRadius = "53px";
  home_bar.style.borderBottomLeftRadius = "53px";
  //Change background back to default
  background.style.backgroundPosition = "bottom";
  background.style.backgroundSize = "cover";
  //Background and Apple logo
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    background.style.backgroundImage = "url(public/DSC00151.JPG)";
  } else {
    background.style.backgroundImage = "url(public/IMG_4463.jpeg)";
  }
  console.log("Reset Homebar");
};

//Link onclick events

//folder
app_folder.onclick = () => {
  folder_back.style.pointerEvents = "all";
  folder_open.style.opacity = "1";
  folder_open.style.pointerEvents = "all";
  folder_open.style.zIndex = "3";
  background.style.filter = "brightness(40%)";
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
  console.log("Desktop device detected");
};

folder_open.onmouseleave = () => {
  folder_back.style.pointerEvents = "none";
  folder_open.style.opacity = "0";
  folder_open.style.pointerEvents = "none";
  background.style.filter = "brightness(100%)";
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
  console.log("folder closed");
};

//Touchscreen support
scroll_container.ontouchstart = () => {
  folder_back.style.pointerEvents = "none";
  folder_open.style.opacity = "0";
  folder_open.style.pointerEvents = "none";
  background.style.filter = "brightness(100%)";
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
  console.log("folder closed");
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
  location.href = "https://music.apple.com/us/browse";
};

//Enter = onClick event
music.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    music.click();
  }
});

airpods.ontouchstart = () => {
  play_party();
};

let party_music = new Audio("./public/audio/party_music.wav");

function play_party() {
  party_music.currentTime = 0;
  party_music.play();
  party_music.loop = false;
  console.log("playing scroll fx");
}

airpods.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      new Notification("Now Playing", {
        body: "Party Time - Newave Oceans",
        icon: "./public/icons/music.png",
        tag: "desktop",
        vibrate: [200, 100, 200],
      });
    }
  });
  play_party();
});

//Enter = onClick event
airpods.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    airpods.click();
  }
});

podcasts.onclick = () => {
  location.href = "https://podcasts.apple.com/us/browse";
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

/* row 4 */
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

apple_tv.onclick = () => {
  location.href = "https://www.apple.com/ca/tv-home/";
};

//Enter = onClick event
apple_tv.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    apple_tv.click();
  }
});

wiki.onclick = () => {
  location.href = "https://www.wikipedia.org";
};

//Enter = onClick event
wiki.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    wiki.click();
  }
});

/* folder inner */
mac.onclick = () => {
  location.href = "https://www.apple.com/ca/macos/sonoma/";
};

//Enter = onClick event
mac.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    mac.click();
  }
});

ios.onclick = () => {
  location.href = "https://www.apple.com/ca/ios/ios-17/";
};

//Enter = onClick event
ios.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    ios.click();
  }
});

findmy.onclick = () => {
  location.href = "https://www.icloud.com/find";
};

//Enter = onClick event
findmy.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    findmy.click();
  }
});

newave.onclick = () => {
  location.href = "https://www.instagram.com/newave_oceans_official/";
};

//Enter = onClick event
newave.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    newave.click();
  }
});

skrem.onclick = () => {
  location.href = "https://www.instagram.com/skremzy/";
};

//Enter = onClick event
skrem.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    skrem.click();
  }
});

audio_tri.onclick = () => {
  location.href = "https://www.instagram.com/audio_phobia/";
};

//Enter = onClick event
audio_tri.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    audio_tri.click();
  }
});
