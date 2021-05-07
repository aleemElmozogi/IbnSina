console.dir(document)
console.log(document.domain);
var sex = document.querySelectorAll('.catagories li h3');
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
     sex[0].innerHTML = "pussy squirt";
     sex[1].innerHTML = "anal prolapse sex";
     sex[2].innerHTML = "gay sex";
     sex[3].innerHTML = "lesbian ass eating contest";
     sex[4].innerHTML = "loli sex";

     event.preventDefault();    
}
submit.addEventListener('click', runEvent)

