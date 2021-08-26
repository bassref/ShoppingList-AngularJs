var myApp = angular.module ("shopList", []);
myApp.controller("shopListController", function($scope) {
    $scope.items = [];
    $scope.newItem = "";

    $scope.pushItem = function() {
        if($scope.newItem != ""){
            $scope.items.push($scope.newItem);
            $scope.newItem = "";
        }
        
    }

    $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
    }

})