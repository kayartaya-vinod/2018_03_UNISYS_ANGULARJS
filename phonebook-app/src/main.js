import { mainController } from './controllers/main-controller';
import { viewContactController } from './controllers/view-contact-controller';
import { contactListController } from './controllers/contact-list-controller';

import { fullnameFilter } from './filters/fullname-filter';

import { PhonebookService } from './services/phonebook-service';
import { appConfig } from './app-config';
import { ageFilter } from './filters/age-filter';
import { phoneFilter } from './filters/phone-filter';
import { editContactController } from './controllers/edit-contact-controller';
import { addContactController } from './controllers/add-contact-controller';

// every module implicitly depends on the 'ng' module, 
// additional modules can be listed as an array (e.g, 'ngRoute')
var app = angular.module('phonebook', ['ngRoute']);

app.controller('mainController', ['$scope', mainController]);
app.controller('viewContactController', ['$scope', 'pbService', '$routeParams', viewContactController]);
app.controller('contactListController', ['$scope', 'pbService', contactListController]);
app.controller('editContactController', ['$scope', 'pbService', '$routeParams', '$location', editContactController]);
app.controller('addContactController', ['$scope', 'pbService', '$location', addContactController]);

app.filter('fullname', fullnameFilter);
app.filter('age', ageFilter);
app.filter('phone', phoneFilter);

// Instruction to AngularJS to register an object of PhonebookService
// While an instance is created by AngularJS, it has to pass an instance
// of $http service
app.service('pbService', ['$http', PhonebookService]);

// this method is invoked in the booting process of your application
// only once. General use of this is to do the route configuration
app.config(['$routeProvider', appConfig]);