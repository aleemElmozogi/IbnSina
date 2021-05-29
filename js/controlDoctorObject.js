// this loops inside doctors array
function doctorsGetter() {
  return doctors;
}

// This function returns the doctors from a specific catagory
function catagoryDoctors(dCatagory) {
  let doctorsList = [];
  for (index in doctorsGetter())
    if (doctorsGetter()[index].dCatagory === dCatagory)
      doctorsList.push(doctorsGetter()[index]);

  return doctorsList;
}

// this returns a doctor pations
function doctorAppointmentsGetter(objectIndex) {
  return doctorsGetter()[objectIndex].appointments;
}

// this find a specific doctor object index
function findDoctor(doctorName, doctroeCatagory) {
  var dIndex = null;
  for (let index in doctorsGetter())
    if (doctorsGetter()[index].dCatagory === doctroeCatagory)
      if (doctorsGetter()[index].dName === doctorName) dIndex = index;
  return dIndex;
}

// this loops inside the appointment objects
// for (let index in neuropathologyAppointmentsGetter())
// console.log(neuropathologyAppointmentsGetter()[index].pAge)

// this loops inside the doctor objects
// for (let index in  neuropathologyDoctorsGetter())
// console.log( neuropathologyDoctorsGetter()[index])

// let doctorsDeserialized

// this function added a new appointment object to the appointment objects array
function pushObject(newAppointmentObject, dName, dCategory) {
  doctorAppointmentsGetter(findDoctor(dName, dCategory)).push(
    newAppointmentObject
  );

  // this stores the new appointment object into the localStorage
  // localStorage.setItem("newAppointments", JSON.stringify(newAppointmentObject))
  // doctorsDeserialized = JSON.parse(localStorage.getItem("newAppointments"))
}
// pushObject("Seraj ben sasi","Mahmmoud khalid",12,"Male","gggggggggggg","Thursday, April 3")

// after the page gets refreshed the new appointments gets deleted from the appointmet object
// the function takes the appointment object from the local storage and saves it in the appointment object
// function nt(dName,dCategory){
// if (JSON.parse(localStorage.getItem("newAppointments"))!= null) {
//   for (index in JSON.parse(localStorage.getItem("newAppointments")))
//     doctorAppointmentsGetter(findDoctor(dName,dCategory)).push(JSON.parse(localStorage.getItem("newAppointments"))[index])

//     console.log(doctorAppointmentsGetter(findDoctor(dName,dCategory)))

//   }
// }
// nt("Seraj ben sasi")

// this function returns the total number of pations from one doctor
function totalAppointments(dName, dCategory) {
  let index = 1;
  for (index in doctorAppointmentsGetter(findDoctor(dName, dCategory))) ++index;
  return index;
}

// This function returns the total number of male pations in a specific doctor appointments
function malePations(dName, dCategory) {
  let malePationsCounter = 0;
  for (index in doctorAppointmentsGetter(findDoctor(dName, dCategory)))
    if (
      doctorAppointmentsGetter(findDoctor(dName, dCategory))[index].pGender ===
      "Male"
    )
      malePationsCounter++;

  return malePationsCounter;
}

// This function returns the total number of female pations in a specific doctor appointments
function femalePations(dName, dCategory) {
  let malePationsCounter = 0;
  for (index in doctorAppointmentsGetter(findDoctor(dName, dCategory)))
    if (
      doctorAppointmentsGetter(findDoctor(dName, dCategory))[index].pGender ===
      "Female"
    )
      malePationsCounter++;

  return malePationsCounter;
}

// this function returns the overAll total number of pations
function allTotalAppointments() {
  let totalAppointmentsCounter = 0;
  for (index in doctorsGetter())
    for (index2 in doctorAppointmentsGetter(index)) ++totalAppointmentsCounter;

  return totalAppointmentsCounter;
}
