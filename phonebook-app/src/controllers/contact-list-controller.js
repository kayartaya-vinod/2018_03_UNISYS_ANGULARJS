export function contactListController($scope, pbService) {
    pbService.getAll()
        .then(resp => $scope.contacts = resp.data);
}