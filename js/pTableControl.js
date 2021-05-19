<<<<<<< HEAD
let dName = sessionStorage.getItem("doctorName");
let doctorCategory = sessionStorage.getItem("dCategory");


function pTable(dName,dCategory) {

  let table = document.getElementById("Upcoming-appointments")

  for(let index in doctorAppointmentsGetter(findDoctor(dName,dCategory)) ){
=======
function pTable(doctorName) {

  let table = document.getElementById("Upcoming-appointments")

  for(let index in doctorAppointmentsGetter(findDoctor(doctorName)) ){
>>>>>>> 5703bcd01dd99cf4133a73a6a74b1a705f9770ab

    let tableRow = document.createElement("tr") 
    tableRow.setAttribute("class", "table-data")
    let tdName = document.createElement("td")
    tdName.setAttribute("class", "name")
    let tdAge = document.createElement("td")
    tdAge.setAttribute("class", "pAge")
    let tdGender = document.createElement("td")
    tdGender.setAttribute("class", "pGender")
    let tdappointmentDate = document.createElement("td")
    let file = document.createElement("td")
    file.setAttribute("class", "file")
    let div = document.createElement("div")
    let pFile = document.createElement("div")
    pFile.setAttribute("class", "pation-file")
    let addFile = document.createElement("div")
    addFile.setAttribute("class", "add-file")
    
 
    div.append(pFile, addFile)
    file.append(div)
    tableRow.append(tdName, tdAge, tdGender, tdappointmentDate,file)
    table.append(tableRow)
 
<<<<<<< HEAD
    tdName.innerHTML = doctorAppointmentsGetter(findDoctor(dName,dCategory))[index].pName
    tdAge.innerHTML = doctorAppointmentsGetter(findDoctor(dName,dCategory))[index].pAge
    tdGender.innerHTML = doctorAppointmentsGetter(findDoctor(dName,dCategory))[index].pGender
    tdappointmentDate.innerHTML = doctorAppointmentsGetter(findDoctor(dName,dCategory))[index].appointmentDate
=======
    tdName.innerHTML = doctorAppointmentsGetter(findDoctor(doctorName))[index].pName
    tdAge.innerHTML = doctorAppointmentsGetter(findDoctor(doctorName))[index].pAge
    tdGender.innerHTML = doctorAppointmentsGetter(findDoctor(doctorName))[index].pGender
    tdappointmentDate.innerHTML = doctorAppointmentsGetter(findDoctor(doctorName))[index].appointmentDate
>>>>>>> 5703bcd01dd99cf4133a73a6a74b1a705f9770ab
    
  
   }
}

<<<<<<< HEAD
pTable(dName,doctorCategory)
=======

>>>>>>> 5703bcd01dd99cf4133a73a6a74b1a705f9770ab
