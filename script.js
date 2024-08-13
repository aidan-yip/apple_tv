const appstore = document.getElementById("appstore");
const facetime = document.getElementById("facetime");
const photos = document.getElementById("photos");
const settings = document.getElementById("settings");

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
  alert("Created by Aidan Yip" + "\n" + "\n" + "Icons by " + "icons8.com");
};