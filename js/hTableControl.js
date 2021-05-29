// window.localStorage.removeItem("newAppointments");
sessionStorage.removeItem("doctorName");

function hTable(category) {
  let table = document.getElementById("doctor-details");
  var paras = document.getElementsByClassName("table-data");
  while (paras[0]) {
    paras[0].parentNode.removeChild(paras[0]);
  }

  for (let index in catagoryDoctors(category)) {
    let tableRow = document.createElement("tr");
    tableRow.setAttribute("class", "table-data");

    tableRow.addEventListener("click", (f) => {
      window.location.href = "../profile-page/index.html";

      let doctorName = catagoryDoctors(category)[index].dName;
      sessionStorage.setItem("doctorName", doctorName);

      let dCategory = catagoryDoctors(category)[index].dCatagory;
      sessionStorage.setItem("dCategory", dCategory);
    });

    let tdName = document.createElement("td");
    tdName.setAttribute("class", "name");
    let tdDegree = document.createElement("td");
    let tdRate = document.createElement("td");
    let tdCost = document.createElement("td");
    let tdWorkTime = document.createElement("td");
    tdWorkTime.setAttribute("class", "time-for-today");
    let sWorkTime = document.createElement("div");
    let eWorkTime = document.createElement("div");

    tdWorkTime.append(sWorkTime, eWorkTime);
    tableRow.append(tdName, tdDegree, tdRate, tdCost, tdWorkTime);
    table.append(tableRow);

    tdName.innerHTML = catagoryDoctors(category)[index].dName;
    tdDegree.innerHTML = catagoryDoctors(category)[index].dDegree;
    tdRate.innerHTML = catagoryDoctors(category)[index].dRate;
    tdCost.innerHTML = catagoryDoctors(category)[index].sCost;
    sWorkTime.innerHTML = catagoryDoctors(category)[index].workTime[0];
    eWorkTime.innerHTML = catagoryDoctors(category)[index].workTime[1];
  }
}
