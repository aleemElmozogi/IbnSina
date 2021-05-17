



function edit_row(no)
{
 document.getElementById("edit_button"+no).style.display="none";
 document.getElementById("save_button"+no).style.display="block";
    
 var name=document.getElementById("name_row"+no);
 var specialty=document.getElementById("specialty_row"+no);
 var cost=document.getElementById("cost_row"+no);
    
 var name_data=name.innerHTML;
 var specialty_data=specialty.innerHTML;
 var cost_data=cost.innerHTML;
    
 name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
 specialty.innerHTML="<input type='text' id='specialty_text"+no+"' value='"+specialty_data+"'>";
 cost.innerHTML="<input type='text' id='cost_text"+no+"' value='"+cost_data+"'>";
}

function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var specialty_val=document.getElementById("specialty_text"+no).value;
 var cost_val=document.getElementById("cost_text"+no).value;

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("specialty_row"+no).innerHTML=specialty_val;
 document.getElementById("cost_row"+no).innerHTML=cost_val;

 document.getElementById("edit_button"+no).style.display="block";
 document.getElementById("save_button"+no).style.display="none";
}

function delete_row(no)
{
 document.getElementById("row"+no+"").outerHTML="";
}

function add_row()
{
 var new_name=document.getElementById("new_name").value;
 var new_specialty=document.getElementById("new_specialty").value;
 var new_cost=document.getElementById("new_cost").value;
    
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='specialty_row"+table_len+"'>"+new_specialty+"</td><td id='cost_row"+table_len+"'>"+new_cost+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

 document.getElementById("new_name").value="";
 document.getElementById("new_specialty").value="";
 document.getElementById("new_cost").value="";
}


























//this is the form's object
let info = {
        pname: "lia",
        gender: "male",
        age: 12,
        doctor: "farah",
        problem: "illness",
        appDate: 01/05/1888,
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

submit.addEventListener('click', function (event){
 
    

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
      







     if (info.pname !== "" && info.gender !== "" && info.age !== "" && info.doctor!== "" &&  info.appDate !== ""  ) {

        var table = document.getElementsByClassNamess("Upcoming-appointments").getElementsByTagName('tbody')[0];
        var newRow = table.insertRow(1);
    
        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);
        var cel3 = newRow.insertCell(2);
        var cel4 = newRow.insertCell(3);
       
        cel1.innerHTML = info.pname;
        cel2.innerHTML = info.age;
        cel3.innerHTML = info.gender;
        cel4.innerHTML = info.appDate ;
        
    }else{
        alert("All the fields are required");
    }
    
    


    
 // clear form after submit
   
    document.querySelector('#pname').value = '' 
    document.querySelector('#gender').value = ''
    document.querySelector('#age').value = ''
    document.querySelector('#chooseDoctor').value = ''
    document.querySelector('#your-problem').value = ''
    document.querySelectorAll('#appDate').value = ''

    event.preventDefault()

}, false)

