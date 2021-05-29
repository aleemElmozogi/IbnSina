function sideBarDoctroDetails() {
  document.getElementById("name").innerHTML =
    doctorsGetter()[findDoctor(pdName, pdCategory)].dName;
  document.getElementById("cost").innerHTML =
    doctorsGetter()[findDoctor(pdName, pdCategory)].sCost;
  document.getElementById("rate").innerHTML =
    doctorsGetter()[findDoctor(pdName, pdCategory)].dRate;
  document.getElementById("degree").innerHTML =
    doctorsGetter()[findDoctor(pdName, pdCategory)].dDegree;
}

sideBarDoctroDetails();
