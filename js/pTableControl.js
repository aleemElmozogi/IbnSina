function pTable(doctorName) {

  let table = document.getElementById("Upcoming-appointments")

  for(let index in doctorAppointmentsGetter(findDoctor(doctorName)) ){

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
 
    tdName.innerHTML = doctorAppointmentsGetter(findDoctor(doctorName))[index].pName
    tdAge.innerHTML = doctorAppointmentsGetter(findDoctor(doctorName))[index].pAge
    tdGender.innerHTML = doctorAppointmentsGetter(findDoctor(doctorName))[index].pGender
    tdappointmentDate.innerHTML = doctorAppointmentsGetter(findDoctor(doctorName))[index].appointmentDate
    
  
   }
}


