function addStudent() {
    //Thoong tin tren form 
    let firstNameField = document.getElementById('firstname');
    let lastNameField = document.getElementById('lastname');
    let emailField= document.getElementById('email');

    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let email = emailField.value;

    //Tao 1tr va 3td
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    td1.innerHTML = firstName;
    td2.innerHTML = lastName;
    td3.innerHTML = email;
    td4.innerHTML = '<button onclick="removeStudent(this)" class="btn- btn-danger btn-sm">Delete</button>'

    let tbody = document.getElementsByTagName('tbody')[0];
    tbody.appendChild(tr);

    firstName='';
    lastName='';
    email='';

    firstNameField.focus();
}
function removeStudent(element) {
    let td = element.parentElement;
    let tr = td.parentElement;
    tr.remove();
}