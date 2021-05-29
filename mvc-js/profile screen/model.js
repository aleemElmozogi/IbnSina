function Model() {
  let doctors = doctorObjects;
  let doctorCategory = sessionStorage.getItem("dCategory");
  let doctorName = sessionStorage.getItem("doctorName");
  let doctorsGetter = () => doctors;

  // this find a specific doctor object index
  let findDoctor = () => {
    let dIndex = null;
    for (let index in doctorsGetter())
      if (doctorsGetter()[index].dCatagory === doctorCategory)
        if (doctorsGetter()[index].dName === doctorName) dIndex = index;

    return dIndex;
  };
  // this returns a doctor pations
  let appointmentsGetter = (objectIndex) =>
    doctorsGetter()[objectIndex].appointments;

  return {
    doctorName: () => doctorName,
    doctorsGetter: () => doctors,

    appointmentsGetter: function (objectIndex) {
      doctorsGetter()[objectIndex].appointments;
    },

    findDoctor: function () {
      let dIndex = null;
      for (let index in doctorsGetter())
        if (doctorsGetter()[index].dCatagory === doctorCategory)
          if (doctorsGetter()[index].dName === doctorName) dIndex = index;

      return dIndex;
    },

    pushObject: function (newAppointmentObject) {
      appointmentsGetter(findDoctor()).push(newAppointmentObject);
    },

    // this function returns the total number of pations from one doctor
    totalAppointments: function () {
      let index = 1;
      for (index in appointmentsGetter(findDoctor())) ++index;

      return index;
    },

    // This function returns the total number of male pations in a specific doctor appointments
    malePations: function () {
      let malePationsCounter = 0;
      for (index in appointmentsGetter(findDoctor()))
        if (appointmentsGetter(findDoctor())[index].pGender === "Male")
          malePationsCounter++;

      return malePationsCounter;
    },

    // This function returns the total number of female pations in a specific doctor appointments
    femalePations: function () {
      let malePationsCounter = 0;
      for (index in appointmentsGetter(findDoctor()))
        if (appointmentsGetter(findDoctor())[index].pGender === "Female")
          malePationsCounter++;

      return malePationsCounter;
    },

    // this function returns the overAll total number of pations
    allTotalAppointments: function () {
      let totalAppointmentsCounter = 0;
      for (index in doctorsGetter())
        for (index2 in appointmentsGetter(index)) 
            ++totalAppointmentsCounter;

      return totalAppointmentsCounter;
    },
  };
}
