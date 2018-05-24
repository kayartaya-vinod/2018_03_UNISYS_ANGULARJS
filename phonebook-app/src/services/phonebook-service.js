const baseUrl = 'https://vinod.co/randomdata/contacts/';

// We register this class with AngularJS as a service (or factory)
export class PhonebookService {

    // AngularJS instnatiates this class, and during that time,
    // we ask angular to pass an instance of $http service
    constructor($http) {
        this.$http = $http;
        console.log('From inside of PhonebookService constructor...');
    }

    getById(id) {
        return this.$http.get(baseUrl + id);
    }

    getAll() {
        return this.$http.get(baseUrl);
    }

    getContactsCount() {
        return this.$http.get(baseUrl + 'count');
    }

    addNewContact(contact) {
        return this.$http.post(baseUrl, contact);
    }

    updateContact(contact) {
        return this.$http.put(baseUrl + contact.id, contact);
    }

    deleteContact(id) {
        return this.$http.delete(baseUrl + id);
    }
}