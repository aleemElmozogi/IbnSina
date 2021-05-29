function View() {
  let DOMstrings = {
    doctorName: "doctor-name",
    totalAppointments: "totalAppointments",
    myAppointments: "myAppointments",
    femalePations: "femalePations",
    malePations: "malePations",
    UpcomingAppointments: "Upcoming-appointments",
    tableDate: "table-data",
    pName: "name",
    pAge: "pAge",
    pGender: "pGender",
    file: "file",
    pationFile: "pation-file",
    addFile: "add-file",
    //side bar
    sdName: "name",
    ssCost: "cost",
    sdRate: "rate",
    sdDegree: "degree",
    chooseDoctor: "chooseDoctor",
    pname: "#pname",
    age: "#age",
    gender: "#gender",
    yourProblem: "#your-problem",
    appointmentDate: "appDate",
    submitBtn: "#submit",
  };

  // Public functions, which can access by object
  return {
    // it makes the min date in the choose date input is set at today's date
    todayDate: function () {
      let today = new Date();
      let dd = today.getDate();
      let mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
      let yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }

      today = yyyy + "-" + mm + "-" + dd;
      document
        .getElementById(DOMstrings.appointmentDate)
        .setAttribute("min", today);
    },

    whelcomeMessage: (doctorName) =>
      (document.getElementById(DOMstrings.doctorName).innerHTML =
        "Doctor " + doctorName + " profile"),

    reports: function (
      allTotalAppointments,
      totalAppointments,
      femalePations,
      malePations
    ) {
      document.getElementById(DOMstrings.totalAppointments).innerHTML =
        allTotalAppointments();
      document.getElementById(DOMstrings.myAppointments).innerHTML =
        totalAppointments();
      document.getElementById(DOMstrings.femalePations).innerHTML =
        femalePations();
      document.getElementById(DOMstrings.malePations).innerHTML = malePations();
    },

    pTable: function (appointmentsGetter) {
      let table = document.getElementById(DOMstrings.UpcomingAppointments);

      var paras = document.getElementsByClassName(DOMstrings.tableDate);
      while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
      }

      // nt(dName , doctorCategory)

      for (let index in doctorAppointmentsGetter(findDoctor())) {
        let tableRow = document.createElement("tr");
        tableRow.setAttribute("class", DOMstrings.tableDate);
        let tdName = document.createElement("td");
        tdName.setAttribute("class", DOMstrings.pName);
        let tdAge = document.createElement("td");
        tdAge.setAttribute("class", DOMstrings.pAge);
        let tdGender = document.createElement("td");
        tdGender.setAttribute("class", DOMstrings.pGender);
        let tdappointmentDate = document.createElement("td");
        let file = document.createElement("td");
        file.setAttribute("class", DOMstrings.file);
        let div = document.createElement("div");
        let pFile = document.createElement("div");
        pFile.setAttribute("class", DOMstrings.pationFile);
        let addFile = document.createElement("div");
        addFile.setAttribute("class", DOMstrings.addFile);

        div.append(pFile, addFile);
        file.append(div);
        tableRow.append(tdName, tdAge, tdGender, tdappointmentDate, file);
        table.append(tableRow);

        tdName.innerHTML = appointmentsGetter()[index].pName;
        tdAge.innerHTML = appointmentsGetter()[index].pAge;
        tdGender.innerHTML = appointmentsGetter()[index].pGender;
        tdappointmentDate.innerHTML =
          appointmentsGetter()[index].appointmentDate;
      }
    },

    sideBarDoctroDetails: function (doctorsGetter, findDoctor) {
      document.getElementById(DOMstrings.sdName).innerHTML =
        doctorsGetter()[findDoctor()].dName;
      document.getElementById(DOMstrings.ssCost).innerHTML =
        doctorsGetter()[findDoctor()].sCost;
      document.getElementById(DOMstrings.sdRate).innerHTML =
        doctorsGetter()[findDoctor()].dRate;
      document.getElementById(DOMstrings.sdDegree).innerHTML =
        doctorsGetter()[findDoctor()].dDegree;
    },

    pChoseDoctor: function (doctorName) {
      let select = document.getElementById(DOMstrings.chooseDoctor);
      let option = document.createElement("option");
      select.append(option);
      option.innerHTML = doctorName;
    },

    getDOMstrings: () => DOMstrings,

    getInput: function () {
      let newAppointmentObject = {
        pName: document.querySelector(DOMstrings.pname).value.trim(),
        pAge: document.querySelector(DOMstrings.age).value.trim(),
        pGender: document.querySelector(DOMstrings.gender).value.trim(),
        pBroblem: document.querySelector(DOMstrings.yourProblem).value.trim(),
        appointmentDate: document
          .getElementById(DOMstrings.appointmentDate)
          .value.trim(),
      };
      return newAppointmentObject;
    },

    getDoctorName: () =>
      document.querySelector(DOMstrings.chooseDoctor).value.trim(),

    clearInputs: function () {
      document.querySelector(DOMstrings.pname).value = "";
      document.querySelector(DOMstrings.gender).value = "";
      document.querySelector(DOMstrings.age).value = "";
      document.querySelector(DOMstrings.chooseDoctor).value = "";
      document.querySelector(DOMstrings.yourProblem).value = "";
      document.getElementById(DOMstrings.appointmentDate).value = "";
    },
  };
}
