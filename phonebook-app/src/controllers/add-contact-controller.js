export function addContactController($scope, pbService, $location) {

    // default value for new contact object
    // will be populated in the contact-form
    $scope.contact = {
        gender: 'Male',
        city: 'Bangalore',
        state: 'Karnataka',
        country: 'India'
    };

    $scope.save = function() {
        pbService.addNewContact($scope.contact)
        .then(resp=>{
            $location.path('/view/' + resp.data.id);
        });
    }

    $scope.cancel = function() {
        $location.path('/');
    }

    console.log($scope);
}