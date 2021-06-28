var selectedRow=null;

function onFormSubmit(){
    var formData=readFormData();
    if(selectedRow==null)
        insertNewRecord(formData)
    else
        updateRecord(formData)

    resetForm();

}

function readFormData(){
    var formData ={};
    formData["fullName"]=document.getElementById("fullName").value;
    formData["employeeCode"]=document.getElementById("employeeCode").value;
    // formData["salary"]=document.getElementById("salary").value;
    formData["city"]=document.getElementById("city").value;

    return formData;
}

function insertNewRecord(data){
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1=newRow.insertCell(0);
    cell1.innerHTML=data.fullName;
    cell2=newRow.insertCell(1);
    cell2.innerHTML=data.employeeCode;
    // cell3=newRow.insertCell(2);
    // cell3.innerHTML=data.salary;
    cell3=newRow.insertCell(2);
    cell3.innerHTML=data.city;
    cell3=newRow.insertCell(3);
    cell3.innerHTML=`<a onClick="onEdit(this)">Edit</a>
                     <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value="";
    document.getElementById("employeeCode").value="";
    document.getElementById("city").value="";
    selectedRow=null;

}

function onEdit(td){
    selectedRow=td.parentElement.parentElement;
    document.getElementById("fullName").value= selectedRow.cells[0].innerHTML;
    document.getElementById("employeeCode").value= selectedRow.cells[1].innerHTML;
    document.getElementById("city").value= selectedRow.cells[2].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.fullName;
    selectedRow.cells[1].innerHTML=formData.employeeCode;
    selectedRow.cells[2].innerHTML=formData.city;

}

function onDelete(td){
    if(confirm("Are you sure you want to delete this record")){
        row= td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
    
    
}

