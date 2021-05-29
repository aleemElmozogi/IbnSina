function Controller(model, view) {

    // Private Expression function
    var setupEventListeners = function () {

        let DOM = view.getDOMstrings();
        
        document.querySelector(DOM.submitBtn).addEventListener('click', submitFunction , false)

        
        
    }


    let submitFunction = function () {
        model.pushObject(view.getInput())
        clearInputs()
        view.reports()
        view.pTable(model.appointmentsGetter(model.findDoctor()))
    }

    // Public functions, which can access by object
    return {

        init: function () {

            view.startUpEvent(model.appointmentsGetter(model.findDoctor()), model.doctorsGetter(), model.findDoctor() , model.doctorName())
            setupEventListeners()
        }

    }

}

