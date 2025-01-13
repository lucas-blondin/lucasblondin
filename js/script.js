const body = document.getElementsByTagName("body")[0];
const container = document.querySelector(".container");
const contacts = document.querySelector(".contacts");
const text = document.querySelector(".text");
const scrollContainer = document.getElementById("scrollContainer");
const header = document.getElementById("main-header");
const zonetxt = document.getElementById("zonetxt");

function showContact() {
  scrollContainer.classList.add("hidden");
  text.classList.add("hidden");
  contacts.classList.remove("hidden");
}

function showText() {
  scrollContainer.classList.add("hidden");
  contacts.classList.add("hidden");
  text.classList.remove("hidden");

  //header.classList.remove("fair_mode");
  //header.classList.add("dark_mode");
  //zonetxt.textContent = "texts";
}

function showMain() {
  contacts.classList.add("hidden");
  text.classList.add("hidden");
  scrollContainer.classList.remove("hidden");

  //header.classList.remove("dark_mode");
  //header.classList.add("fair_mode");
  //zonetxt.textContent = "catalogue";
}
