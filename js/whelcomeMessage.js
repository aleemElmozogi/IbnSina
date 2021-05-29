console.log(pdName);

function whelcomeMessage() {
  document.getElementsByClassName("doctor-name").innerHTML =
    doctorsGetter()[findDoctor(pdName, pdCategory)].dName;

  document.getElementById("doctor-name").innerHTML =
    "Doctor " + pdName + " profile";
}
whelcomeMessage();
