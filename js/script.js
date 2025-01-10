const body = document.getElementsByTagName("body")[0];
const container = document.querySelector(".container");
const contacts = document.querySelector(".contacts");
const about = document.querySelector(".about");
const text = document.querySelector(".text");
const scrollContainer = document.getElementById("scrollContainer");
const header = document.getElementById("main-header");
const zonetxt = document.getElementById("zonetxt");

function showContact() {
  container.classList.add("hidden");
  about.classList.add("hidden");
  text.classList.add("hidden");
  body.classList.add("ylocked");
  contacts.classList.remove("hidden");

  //header.classList.remove("fair_mode");
  //header.classList.add("dark_mode");
  //zonetxt.textContent = "contacts";
}

function showAbout() {
  container.classList.add("hidden");
  contacts.classList.add("hidden");
  text.classList.add("hidden");
  about.classList.remove("hidden");
  body.classList.remove("ylocked");

  //header.classList.remove("fair_mode");
  //header.classList.add("dark_mode");
  //zonetxt.textContent = "texts";
}

function showText() {
  container.classList.add("hidden");
  contacts.classList.add("hidden");
  about.classList.add("hidden");
  text.classList.remove("hidden");
  body.classList.remove("ylocked");

  //header.classList.remove("fair_mode");
  //header.classList.add("dark_mode");
  //zonetxt.textContent = "texts";
}

function showMain() {
  contacts.classList.add("hidden");
  about.classList.add("hidden");
  text.classList.add("hidden");
  body.classList.add("ylocked");
  container.classList.remove("hidden");

  //header.classList.remove("dark_mode");
  //header.classList.add("fair_mode");
  //zonetxt.textContent = "catalogue";
}
