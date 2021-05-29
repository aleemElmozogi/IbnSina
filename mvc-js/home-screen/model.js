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
    // This function returns the doctors from a specific catagory
    catagoryDoctors: function () {
      let doctorsList = [];
      for (index in doctorsGetter())
        if (doctorsGetter()[index].dCatagory === doctorCategory)
          doctorsList.push(doctorsGetter()[index]);

      return doctorsList;
    },

    pushObject: function (newAppointmentObject) {
      appointmentsGetter(findDoctor()).push(newAppointmentObject);
    },

    // this function returns the overAll total number of pations
    allTotalAppointments: function () {
      let totalAppointmentsCounter = 0;
      for (index in doctorsGetter())
        for (index2 in appointmentsGetter(index)) ++totalAppointmentsCounter;

      return totalAppointmentsCounter;
    },
  };
}
