
let submit = document.querySelector('#submit')

submit.addEventListener('click', function (event){



info.setter(
    document.querySelector('#pname').value,   
    document.querySelector('#gender').value,
    document.querySelector('#age').value,
    document.querySelector('#chooseDoctor').value,
    document.querySelector('#your-problem').value,
    document.querySelectorAll('#appDate').value
 )
 


// clear form after submit

document.querySelector('#pname').value = '' 
document.querySelector('#gender').value = ''
document.querySelector('#age').value = ''
document.querySelector('#chooseDoctor').value = ''
document.querySelector('#your-problem').value = ''
document.querySelectorAll('#appDate').value = ''

event.preventDefault()

}, false)