console.dir(document)
console.log(document.domain);
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


let submit = document.querySelector('#submit')

runEvent = function(){
    info.setter(
        document.querySelector('#pname').value,   
        document.querySelector('#gender').value,
        document.querySelector('#age').value,
        document.querySelector('#chooseDoctor').value,
        document.querySelector('#your-problem').value,
        document.querySelectorAll('#appDate').value
     ) 
     

     event.preventDefault();    
}
submit.addEventListener('click', runEvent)

