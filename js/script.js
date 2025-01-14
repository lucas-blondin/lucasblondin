const body = document.getElementsByTagName("body")[0];
const container = document.querySelector(".container");
const contacts = document.querySelector(".contacts");
const text = document.querySelector(".text");
const scrollContainer = document.getElementById("scrollContainer");
const header = document.getElementById("main-header");
const zonetxt = document.getElementById("zonetxt");
const cataloguebutton = document.querySelector(".catalogueb");
const textbutton = document.querySelector(".textb");
const contactbutton = document.querySelector(".contactb");

function showContact() {
  scrollContainer.classList.add("hidden");
  text.classList.add("hidden");
  contacts.classList.remove("hidden");
  contactbutton.classList.add("highlight");
  textbutton.classList.remove("highlight");
  cataloguebutton.classList.remove("highlight");
}

function showText() {
  scrollContainer.classList.add("hidden");
  contacts.classList.add("hidden");
  text.classList.remove("hidden");
  textbutton.classList.add("highlight");
  contactbutton.classList.remove("highlight");
  cataloguebutton.classList.remove("highlight");

  //header.classList.remove("fair_mode");
  //header.classList.add("dark_mode");
  //zonetxt.textContent = "texts";
}

function showMain() {
  contacts.classList.add("hidden");
  text.classList.add("hidden");
  scrollContainer.classList.remove("hidden");
  cataloguebutton.classList.add("highlight");
  textbutton.classList.remove("highlight");
  contactbutton.classList.remove("highlight");

  //header.classList.remove("dark_mode");
  //header.classList.add("fair_mode");
  //zonetxt.textContent = "catalogue";
}
