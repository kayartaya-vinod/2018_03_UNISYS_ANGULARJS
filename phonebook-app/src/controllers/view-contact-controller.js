export function viewContactController($scope, pbService, $routeParams) {

    var id = $routeParams['id'];
    
    pbService.getById(id)
    .then( resp=>$scope.contact = resp.data );

}