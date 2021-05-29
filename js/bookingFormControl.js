let pdName = sessionStorage.getItem("doctorName");
let pdCategory = sessionStorage.getItem("dCategory");

// nt(pdName,pdCategory)

// this sets the min date in the date input to today's date
function todayDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0 so need to add 1 to make it 1!
    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    today = yyyy + '-' + mm + '-' + dd;
    document.getElementById("appDate").setAttribute("min", today);
}
todayDate()

// chose doctor input in the profile page
function pChoseDoctor(dName) {
    let select = document.getElementById("chooseDoctor")
    let option = document.createElement("option")
    select.append(option)
    option.innerHTML = dName
}

if (pdName != null)
    pChoseDoctor(pdName)


// chose doctor input in the home page
function hChoseDoctor(category) {
    let select = document.getElementById("chooseDoctor")

    var paras = document.getElementsByClassName("option")
    while (paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }


    for (let index in catagoryDoctors(category)) {
        let option = document.createElement("option")
        option.setAttribute("class", "option")
        select.append(option)
        option.innerHTML = catagoryDoctors(category)[index].dName

    }
}

function appointmentSetter(dName, pName, pAge, pGender, pBroblem, appointmentDate, dCategory) {
    let newAppointmentObject = {
        pName: pName,
        pAge: pAge,
        pGender: pGender,
        pBroblem: pBroblem,
        appointmentDate: appointmentDate,
    }
    pushObject(newAppointmentObject, dName, dCategory)
}

let submit = document.querySelector('#submit')

submit.addEventListener('click', function(event) {

    // this addes the new appointment object into the doctor appointment objects array

    appointmentSetter(
        document.querySelector("#chooseDoctor").value.trim(),
        document.querySelector("#pname").value.trim(),
        document.querySelector("#age").value.trim(),
        document.querySelector("#gender").value.trim(),
        document.querySelector("#your-problem").value.trim(),
        document.getElementById("appDate").value.trim(),
        pdCategory
    )


    // clear form after submit


    if (pdName != null)
        pTable(pdName, pdCategory)

    reports(pdName, pdCategory)
    
    document.getElementById("totalAppointments").innerHTML = allTotalAppointments()

    document.querySelector('#pname').value = ''
    document.querySelector('#gender').value = ''
    document.querySelector('#age').value = ''
    document.querySelector('#chooseDoctor').value = ''
    document.querySelector('#your-problem').value = ''
    document.getElementById("appDate").value = ''




    event.preventDefault()
}, false)