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
}

appstore.onmouseover = () => {
  home_bar.style.borderTopLeftRadius = "30px";
  home_bar.style.borderBottomLeftRadius = "30px";
};

appstore.onmouseleave = () => {
  home_bar.style.borderTopLeftRadius = "45px";
  home_bar.style.borderBottomLeftRadius = "45px";
};

arcade.onmouseover = () => {
  home_bar.style.borderTopRightRadius = "30px";
  home_bar.style.borderBottomRightRadius = "30px";
};

arcade.onmouseleave = () => {
  home_bar.style.borderTopRightRadius = "45px";
  home_bar.style.borderBottomRightRadius = "45px";
};
