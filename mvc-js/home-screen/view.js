function View() {
  let DOMstrings = {
    Neuropathology: "#Neuropathology",
    EarTherapy: "#EarTherapy",
    EyesightTherapy: "#EyesightTherapy",
    HeartTherapy: "#HeartTherapy",
    GastroEnterology: "#GastroEnterology",
    doctorDetails: "doctor-details",
    tableDate: "table-data",
    //doctor name in the home table row class name
    doctorName: "name",
    //doctor work time in the home table row class name
    doctorWorkTime: "time-for-today",
    totalAppointments: "totalAppointments",
    //side bar inputs
    doctorOptionListInputs: "option",
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
      document.getElementById(DOMstrings.appointmentDate).setAttribute("min", today);
    },

    hChoseDoctor: function (doctorsCategory) {
      let select = document.getElementById(DOMstrings.chooseDoctor);

      var paras = document.getElementsByClassName(
        DOMstrings.doctorOptionListInputs
      );
      while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
      }

      for (let index in doctorsCategory) {
        let option = document.createElement("option");
        option.setAttribute("class", DOMstrings.doctorOptionListInputs);
        select.append(option);
        option.innerHTML = doctorsCategory[index].dName;
      }
    },

    hTable: function (doctorsCategory) {
      let table = document.getElementById(DOMstrings.doctorDetails);
      var paras = document.getElementsByClassName(DOMstrings.tableDate);
      while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
      }

      for (let index in doctorsCategory) {
        let tableRow = document.createElement("tr");
        tableRow.setAttribute("class", DOMstrings.tableDate);

        tableRow.addEventListener("click", (f) => {
          window.location.href = "../profile-page/index.html";

          let doctorName = doctorsCategory[index].dName;
          sessionStorage.setItem("doctorName", doctorName);

          let dCategory = doctorsCategory[index].dCatagory;
          sessionStorage.setItem("dCategory", dCategory);
        });

        let tdName = document.createElement("td");
        tdName.setAttribute("class", DOMstrings.doctorName);
        let tdDegree = document.createElement("td");
        let tdRate = document.createElement("td");
        let tdCost = document.createElement("td");
        let tdWorkTime = document.createElement("td");
        tdWorkTime.setAttribute("class", DOMstrings.doctorWorkTime);
        let sWorkTime = document.createElement("div");
        let eWorkTime = document.createElement("div");

        tdWorkTime.append(sWorkTime, eWorkTime);
        tableRow.append(tdName, tdDegree, tdRate, tdCost, tdWorkTime);
        table.append(tableRow);

        tdName.innerHTML = doctorsCategory[index].dName;
        tdDegree.innerHTML = doctorsCategory[index].dDegree;
        tdRate.innerHTML = doctorsCategory[index].dRate;
        tdCost.innerHTML = doctorsCategory[index].sCost;
        sWorkTime.innerHTML = doctorsCategory[index].workTime[0];
        eWorkTime.innerHTML = doctorsCategory[index].workTime[1];
      }
    },

    sideBarTotalAppointment: function (allTotalAppointments) {
      document.getElementById(DOMstrings.totalAppointments).innerHTML = allTotalAppointments;
    },

    getDOMstrings: () => DOMstrings,

    getInput: function () {
      let newAppointmentObject = {
        pName: document.querySelector(DOMstrings.pname).value.trim(),
        pAge: document.querySelector(DOMstrings.age).value.trim(),
        pGender: document.querySelector(DOMstrings.gender).value.trim(),
        pBroblem: document.querySelector(DOMstrings.yourProblem).value.trim(),
        appointmentDate: document.getElementById(DOMstrings.appointmentDate).value.trim(),
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
