// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
//convert the arguments into a contact object and return it
var object = {
    id: id,
    nameFirst: nameFirst,
    nameLast: nameLast
}
return object
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    //hold the contacts in an array
    var contacts = []
    //return the factory object containing other functions as properties
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        //push the contact into the contaacts array
        addContact: function(contact) {
            contacts.push(contact)
        },
        findContact: function(fullName) {
            var array = fullName.split(" ")
            for (var i = 0; i < contacts.length; i++){
                if (contacts[i].nameFirst === array[0] && contacts[i].nameLast === array[1]){
                    return contacts[i]
                }else {
                    return undefined
                }
            }
        },
        removeContact: function(contact) {
            //loop through the contatcts array and remove the object equal to the argument
            for (var i = 0; i < contacts.length; i++){
                if (contacts[i] === contact){
                    contacts.splice(i, 1)
                }
            }
        },
        printAllContactNames: function() {
            //loop through the contacts array to find each fullname and push them into the names array with a space seperating them
            var names = []
            for (var i = 0; i < contacts.length; i++){
            //creare a variable to store the full name
            var fullName = contacts[i].nameFirst + " " + contacts[i].nameLast
            names.push(fullName)
            }
            //return the names array with each element seperated by a line break
            return names.join("\n")

        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
