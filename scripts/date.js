const dateToday = new Date();
const currentyear = document.getElementById("currentyear");
currentyear.innerText = dateToday.getFullYear();

const lastModified = document.getElementById("lastModified");
lastModified.innerText = document.lastModified;
