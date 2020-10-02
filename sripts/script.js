var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nome"] = document.getElementById("nome").value;
    formData["sobnome"] = document.getElementById("sobnome").value;
    formData["infEmail"] = document.getElementById("infEmail").value;
    formData["confEmail"] = document.getElementById("confEmail").value;
    formData["infSenha"] = document.getElementById("infSenha").value;
    formData["confSenha"] = document.getElementById("confSenha").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nome;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.sobnome;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.infEmail;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.confEmail;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.infSenha;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.confSenha;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nome").value = "";
    document.getElementById("sobnome").value = "";
    document.getElementById("infEmail").value = "";
    document.getElementById("confEmail").value = "";
    document.getElementById("infSenha").value = "";
    document.getElementById("confSenha").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nome").value = selectedRow.cells[0].innerHTML;
    document.getElementById("sobnome").value = selectedRow.cells[1].innerHTML;
    document.getElementById("infEmail").value = selectedRow.cells[2].innerHTML;
    document.getElementById("confEmail").value = selectedRow.cells[3].innerHTML;
    document.getElementById("infSenha").value = selectedRow.cells[3].innerHTML;
    document.getElementById("confSenha").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nome;
    selectedRow.cells[1].innerHTML = formData.sobnome;
    selectedRow.cells[2].innerHTML = formData.infEmail;
    selectedRow.cells[3].innerHTML = formData.confEmail;
    selectedRow.cells[3].innerHTML = formData.infSenha;
    selectedRow.cells[3].innerHTML = formData.confSenha;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nome").value == "") {
        isValid = false;
        document.getElementById("nomeValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nomeValidationError").classList.contains("hide"))
            document.getElementById("nomeValidationError").classList.add("hide");
    }
    return isValid;
}