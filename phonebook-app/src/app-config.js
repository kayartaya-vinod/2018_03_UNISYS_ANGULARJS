export function appConfig($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './templates/home.html'
    })
    .when('/view/:id', {
        templateUrl: './templates/view-contact.html',
        controller: 'viewContactController'
    })
    .when('/add', {
        templateUrl: './templates/contact-form.html',
        controller: 'addContactController'
    })
    .when('/edit/:id', {
        templateUrl: './templates/contact-form.html',
        controller: 'editContactController'
    })
    .when('/all', {
        templateUrl: './templates/contact-list.html',
        controller: 'contactListController'
    })
    .otherwise({
        template: '<h1>404 - Page not found</h1>'
    });
}