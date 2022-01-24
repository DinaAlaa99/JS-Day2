function Contact(name, phone) {
    this.name = name
    this.phone = phone
    this.printData = function () {
        alert("name: " + this.name + " phone: " + this.phone)
    }

}

var phoneApp = {
    contacts: [],
    addContact: function () {
        var newContact = new Contact("", "")
        newContact.name = prompt("Enter contact name")
        newContact.phone = prompt("Enter contact num")
        phoneApp.contacts.push(newContact)
    },
    searchContact: function () {
        var currentContact
        var key
        var i = 0
        key = prompt("Enter contact name or num")

        while (i < phoneApp.contacts.length) {
            currentContact = phoneApp.contacts[i]
            if (key == currentContact.name || key == currentContact.phone)
            {
                currentContact.printData()
            }
            else
                i++;
        }

    },
    runApp: function () {
        var flag = 1
        while (flag) {
            choice = prompt("Enter your choice (add , search , exit )")
            switch (choice) {
                case "add":
                    phoneApp.addContact()
                    break;

                case "search":
                    phoneApp.searchContact()
                    break

                case "exit":
                    flag = 0
            }
        }


    }
}

phoneApp.contacts.push(new Contact("dina", "4789"))
phoneApp.runApp()