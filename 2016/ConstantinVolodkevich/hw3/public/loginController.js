var gameApp = angular.module('routerApp.loginController', []);

gameApp.controller('loginController', ['$scope', '$http','$window','$rootScope', function ($scope,$http,$window, $rootScope) {

    $scope.addUser = function() {
        $http.post('/users', $scope.user)
            .success(function(data) {
            })

    };


    $scope.login = function() {
        $http.post('/login', $scope.user)
            .success(function(data){
                console.log(data)
                $window.localStorage['token'] = JSON.stringify(data)
                $window.localStorage['user'] = $scope.user['name']
                console.log($window.localStorage['user'])
            })
    };

}])
