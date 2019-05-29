class Contact {
    constructor (name, email, phone, relation) {
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.relation = relation;
    }
}

class AddressBook {
    constructor () {
        this.contacts = [new Contact("Jonah", "JNye@GrandCircus.edu", "586-898-0114", "Kind Grader"), new Contact("Scott", "SRush@Wayne.edu", "313-210-8900", "Friend")];
    }

    addContact(name) {
        this.contacts.push(name);
    }

    createContact(name, email, phone, relation) {
        return new Contact(name, email, phone, relation);
    }

    deleteContactAt(index) {
        this.contacts.splice(index,1);
    }

    print() {
        for (let index = 0; index < this.contacts.length; index++) {
            console.log(`${index}. ${this.contacts[index]["name"]} P: ${this.contacts[index]["phone"]} E: ${this.contacts[index]["email"]} R: ${this.contacts[index]["relation"]}`);
        }
    }

    printContactsAtEndOfHTML() {
        let addressBookDiv = document.getElementById("address-book");
        if (addressBookDiv.childElementCount > 0) {
            addressBookDiv.innerHTML = "";
            // for (let index = 0; index < addressBookDiv.childElementCount; index++) {
            //     addressBookDiv.removeChild(addressBookDiv.childNodes[0]);
            // }
        }
        

        for (let index = 0; index < this.contacts.length; index++) {
            // console.log(`${index}. ${this.contacts[index]["name"]} P: ${this.contacts[index]["phone"]} E: ${this.contacts[index]["email"]} R: ${this.contacts[index]["relation"]}`);
            let newDiv = document.createElement("div");
            newDiv.setAttribute('class', 'contact');
            // newDiv.setAttribute('position', 'relative');
            newDiv.innerHTML = (`Name: ${this.contacts[index]["name"]}<br />Email: ${this.contacts[index]["phone"]} <br />Email: ${this.contacts[index]["email"]} <br />Relation: ${this.contacts[index]["relation"]}`);
            // newDiv.innerHTML += <i class="material-icons">delete</i>;
            // newDiv.innerText = "Hello World!";
            // console.log(this.contacts[index]);

            let deleteButton = document.createElement("button");
            deleteButton.setAttribute('class', 'delete-button material-icons');
            // deleteButton.setAttribute('id', this.contacts[index]["name"]);
            deleteButton.innerHTML = "delete"
            
            newDiv.appendChild(deleteButton);
            let addressBookDiv = document.getElementById("address-book");
            addressBookDiv.append(newDiv);
        }
    }
}

let myAddressBook = new AddressBook();

document.getElementById('new-contact-info').addEventListener("submit", function(e) {
    const newContactName = document.querySelector("#name").value;
    const newContactEmail = document.querySelector("#email").value;
    const newContactPhone = document.querySelector("#phone").value;
    const newContactRelation = document.querySelector("#relation").value;
    const newContact = myAddressBook.createContact(newContactName,newContactEmail, newContactPhone, newContactRelation);
    myAddressBook.addContact(newContact);
    e.preventDefault();
    myAddressBook.printContactsAtEndOfHTML();
})

let deleteLink = document.querySelectorAll('delete-button');
for (var index = 0; index < deleteLink.length; index++) {
    deleteLink[index].addEventListener('click', function(e) {
        console.log("pressed");
        e.preventDefault();
    })
}

myAddressBook.printContactsAtEndOfHTML();

myAddressBook.print();