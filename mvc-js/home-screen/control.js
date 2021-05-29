function Controller(model, view) {
  // Private Expression function
  var setupEventListeners = function () {
    let DOM = view.getDOMstrings();
    let catagoryId = [
      DOM.Neuropathology,
      DOM.EarTherapy,
      DOM.EyesightTherapy,
      DOM.HeartTherapy,
      DOM.GastroEnterology,
    ];

    document
      .querySelector(DOM.submitBtn)
      .addEventListener("click", submitFunction(), false);

    for (let index in catagoryId)
      document
        .querySelector(catagoryId[index])
        .addEventListener("click", clickCatagory());
  };

  let clickCatagory = function () {
    view.hTable(model.catagoryDoctors());
    view.hChoseDoctor(model.catagoryDoctors());
  };

  let submitFunction = function () {
    model.pushObject(view.getInput());
    view.clearInputs();
    view.sideBarTotalAppointment(model.allTotalAppointments());
  };

  // Public functions, which can access by object
  return {
    init: function () {
      view.todayDate();
      view.sideBarTotalAppointment(model.allTotalAppointments());
      setupEventListeners();
    },
  };
}
