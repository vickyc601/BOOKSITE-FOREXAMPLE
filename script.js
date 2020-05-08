function onformselection(){
    var formData = readFormData();
    if(selectRow == null)
    insertNewRecord(formData);
    else
    resetform();
}

function readFormData(){
    var formData = {};
    formData["fullname"] = document.getElementById("fullName").value
    formData["empCode"] = document.getElementById("empCode").value
    formData["Salary"] = document.getElementById("Salary").value
    formData["city"] = document.getElementById("city").value
  return formData;
}

function insertNewRecord(data){
var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = '<a>Edit<a/><a>Delete</a>';

}

function resetform(){
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("Salary").value = "";
    document.getElementById("City").value = "";
    

}