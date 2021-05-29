let doctorName = sessionStorage.getItem("doctorName");
let dCategory = sessionStorage.getItem("dCategory");

function reports(dName) {
  document.getElementById("totalAppointments").innerHTML =
    allTotalAppointments();
  document.getElementById("myAppointments").innerHTML = totalAppointments(
    dName,
    dCategory
  );
  document.getElementById("femalePations").innerHTML = femalePations(
    dName,
    dCategory
  );
  document.getElementById("malePations").innerHTML = malePations(
    dName,
    dCategory
  );
}
reports(doctorName, dCategory);
