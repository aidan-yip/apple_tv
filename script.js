//Background
const background = document.getElementById("background");

//Homebar
const home_bar = document.getElementById("home_bar");

//App icons

const appstore = document.getElementById("appstore");
const facetime = document.getElementById("facetime");
const photos = document.getElementById("photos");
const settings = document.getElementById("settings");
const arcade = document.getElementById("arcade");

const youtube = document.getElementById("youtube");
const instagram = document.getElementById("instagram");
const twitter = document.getElementById("twitter");
const facebook = document.getElementById("facebook");
const google = document.getElementById("google");

const pq = document.getElementById("pq");

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

appstore.onclick = () => {
  location.href = "https://www.apple.com/ca/app-store/";
};

facetime.onclick = () => {
  location.href = "https://apps.apple.com/ca/app/facetime/id1110145091";
};

photos.onclick = () => {
  location.href = "https://www.icloud.com/photos/";
};

settings.onclick = () => {
  location.href = "https://www.icloud.com/settings";
};

arcade.onclick = () => {
  location.href = "https://www.apple.com/ca/apple-arcade/";
};

youtube.onclick = () => {
  location.href = "https://www.youtube.com";
};

instagram.onclick = () => {
  location.href = "https://www.instagram.com";
};

facebook.onclick = () => {
  location.href = "https://www.facebook.com";
};

twitter.onclick = () => {
  location.href = "https://x.com";
};

google.onclick = () => {
  location.href = "https://www.google.com";
};

pq.onclick = () => {
  location.href = "https://perilous-quest.netlify.app";
};

//app hover background changes
appstore.onmouseover = () => {
  home_bar.style.borderTopLeftRadius = "30px";
  home_bar.style.borderBottomLeftRadius = "30px";
  //icon
  background.style.backgroundImage =
    "url(public/app_icons/icons8-app-store-500.png)";
  //Change background to accommodate icon
  background.style.backgroundPosition = "top";
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
  background.style.backgroundImage = "url(public/IMG_4463.jpeg)";
};
