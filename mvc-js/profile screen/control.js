function Controller(model, view) {
  // Private Expression function
  var setupEventListeners = function () {
    let DOM = view.getDOMstrings();

    document.querySelector(DOM.submitBtn).addEventListener("click", submitFunction, false);
  };

  let submitFunction = function () {
    model.pushObject(view.getInput());
    clearInputs();
    view.reports(
      model.allTotalAppointments(),
      model.totalAppointments(),
      mode.femalePations(),
      model.malePations()
    );
    view.pTable(model.appointmentsGetter(model.findDoctor()));
  };

  // Public functions, which can access by object
  return {
    init: function () {
      view.todayDate();
      view.whelcomeMessage(mode.doctorName());
      view.reports(
        model.allTotalAppointments(),
        model.totalAppointments(),
        mode.femalePations(),
        model.malePations()
      );
      view.pTable(model.appointmentsGetter(model.findDoctor()));
      view.sideBarDoctroDetails(model.doctorsGetter(), model.findDoctor());
      view.pChoseDoctor(model.doctorName());
      view.setupEventListeners();
    },
  };
}
