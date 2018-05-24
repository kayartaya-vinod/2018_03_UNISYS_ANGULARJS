export function editContactController(
    $scope, pbService, $routeParams, $location) {

    var id = $routeParams['id'];

    pbService.getById(id)
        .then(resp => $scope.contact = resp.data);

    $scope.save = function(){
        pbService.updateContact($scope.contact)
        .then(resp=>{
            $location.path('/view/' + id);
        });
    };

    $scope.cancel = function() {
        $location.path('/view/' + id);
    };
}