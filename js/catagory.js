let Neuropathology = document.querySelector("#Neuropathology");
let EarTherapy = document.querySelector("#EarTherapy");
let EyesightTherapy = document.querySelector("#EyesightTherapy");
let HeartTherapy = document.querySelector("#HeartTherapy");
let GastroEnterology = document.querySelector("#GastroEnterology");

Neuropathology.addEventListener("click", (e) => {
  hTable("Neuropathology");
  hChoseDoctor("Neuropathology");
});
EarTherapy.addEventListener("click", (e) => {
  hTable("Ear Therapy");
  hChoseDoctor("Ear Therapy");
});
EyesightTherapy.addEventListener("click", (e) => {
  hTable("Eyesight Therapy");
  hChoseDoctor("Eyesight Therapy");
});
HeartTherapy.addEventListener("click", (e) => {
  hTable("Heart Therapy");
  hChoseDoctor("Heart Therapy");
});
GastroEnterology.addEventListener("click", (e) => {
  hTable("Gastro Enterology");
  hChoseDoctor("Gastro Enterology");
});
