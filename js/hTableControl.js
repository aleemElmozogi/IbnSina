<<<<<<< HEAD

=======
>>>>>>> 5703bcd01dd99cf4133a73a6a74b1a705f9770ab
function hTable(category) {

  let table = document.getElementById("doctor-details")

<<<<<<< HEAD
  


      for(let index in catagoryDoctors(category)){

        let tableRow = document.createElement("tr") 
        tableRow.setAttribute("class", "table-data")

        tableRow.onclick = function() {
          window.location.href="../profile-page/index.html";
          
          let doctorName = catagoryDoctors(category)[index].dName;
          sessionStorage.setItem("doctorName", doctorName);

          let dCategory = catagoryDoctors(category)[index].dCatagory;
          sessionStorage.setItem("dCategory", dCategory);
          

          

        }

        

        let tdName = document.createElement("td")
        tdName.setAttribute("class", "name")
        let tdDegree = document.createElement("td")
        let tdRate = document.createElement("td")
        let tdCost = document.createElement("td")
        let tdWorkTime = document.createElement("td")
        tdWorkTime.setAttribute("class", "time-for-today")
        let sWorkTime = document.createElement("div")
        let eWorkTime = document.createElement("div")
    
        tdWorkTime.append(sWorkTime, eWorkTime)
        tableRow.append(tdName, tdDegree, tdRate, tdCost,tdWorkTime)
        table.append(tableRow)
    
        tdName.innerHTML = catagoryDoctors(category)[index].dName
        tdDegree.innerHTML = catagoryDoctors(category)[index].dDegree
        tdRate.innerHTML = catagoryDoctors(category)[index].dRate
        tdCost.innerHTML = catagoryDoctors(category)[index].sCost
        sWorkTime.innerHTML = catagoryDoctors(category)[index].workTime[0]
        eWorkTime.innerHTML = catagoryDoctors(category)[index].workTime[1]
      
      }
 }
=======
  for(let index in catagoryDoctors(category)){

    let tableRow = document.createElement("tr") 
    tableRow.setAttribute("class", "table-data")
    let tdName = document.createElement("td")
    tdName.setAttribute("class", "name")
    let tdDegree = document.createElement("td")
    let tdRate = document.createElement("td")
    let tdCost = document.createElement("td")
    let tdWorkTime = document.createElement("td")
    tdWorkTime.setAttribute("class", "time-for-today")
    let sWorkTime = document.createElement("div")
    let eWorkTime = document.createElement("div")
 
    tdWorkTime.append(sWorkTime, eWorkTime)
    tableRow.append(tdName, tdDegree, tdRate, tdCost,tdWorkTime)
    table.append(tableRow)
 
    tdName.innerHTML = catagoryDoctors(category)[index].dName
    tdDegree.innerHTML = catagoryDoctors(category)[index].dDegree
    tdRate.innerHTML = catagoryDoctors(category)[index].dRate
    tdCost.innerHTML = catagoryDoctors(category)[index].sCost
    sWorkTime.innerHTML = catagoryDoctors(category)[index].workTime[0]
    eWorkTime.innerHTML = catagoryDoctors(category)[index].workTime[1]
  
   }
}
>>>>>>> 5703bcd01dd99cf4133a73a6a74b1a705f9770ab

