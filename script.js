// Array to store contacts
let contacts = [];

// Function to Add Contact
function addContact() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all fields!");
        return;
    }

    let contact = { name, phone, email };
    contacts.push(contact);
    displayContacts();

    // Clear input fields
    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
}

// Function to Display Contacts
function displayContacts() {
    let tableBody = document.getElementById("contact-list");
    tableBody.innerHTML = ""; // Clear previous list

    contacts.forEach((contact, index) => {
        let row = `<tr>
                        <td>${contact.name}</td>
                        <td>${contact.phone}</td>
                        <td>${contact.email}</td>
                        <td><button class="delete-btn" onclick="deleteContact(${index})">Delete</button></td>
                   </tr>`;
        tableBody.innerHTML += row;
    });
}

// Function to Delete Contact
function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts();
}

// Function to Search Contacts
function searchContact() {
    let searchValue = document.getElementById("search").value.toLowerCase();
    let filteredContacts = contacts.filter(contact => 
        contact.name.toLowerCase().includes(searchValue)
    );

    let tableBody = document.getElementById("contact-list");
    tableBody.innerHTML = ""; // Clear previous list

    filteredContacts.forEach((contact, index) => {
        let row = `<tr>
                        <td>${contact.name}</td>
                        <td>${contact.phone}</td>
                        <td>${contact.email}</td>
                        <td><button class="delete-btn" onclick="deleteContact(${index})">Delete</button></td>
                   </tr>`;
        tableBody.innerHTML += row;
    });
}
