//this is the form's object
let info = {
        pname: "lia",
        gender: "male",
        age: 12,
        doctor: "farah",
        problem: "illness",
        appDate: 1,
        setter(pname, gender, age, doctor, problem, appDate) {
            this.pname = pname;
            this.gender = gender;
            this.age = age;
            this.doctor = doctor;
            this.problem = problem;
            this.appDate = appDate;
        }
    }

//this is the event that gets triggered when clicking "submit"
runEvent = function(){
//here we set the object's properties to the form fields     
    info.setter(
        document.querySelector('#pname').value,   
        document.querySelector('#gender').value,
        document.querySelector('#age').value,
        document.querySelector('#chooseDoctor').value,
        document.querySelector('#your-problem').value,
        document.querySelectorAll('#appDate').value
     )
//this is a test where we change the categories labels to the appointment's information 
     var tester = document.querySelectorAll('.catagories li h3'); 
     tester[0].innerHTML = info.pname;
     tester[1].innerHTML = info.gender;
     tester[2].innerHTML = info.age;
     tester[3].innerHTML = info.doctor;
     tester[4].innerHTML = info.appDate;
//function that prevents default refreshing of the page
     event.preventDefault();    
}

let submit = document.querySelector('#submit')

submit.addEventListener('click', runEvent)
