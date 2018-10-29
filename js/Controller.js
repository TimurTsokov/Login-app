var app = angular.module('mainApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'Login.html'
        })
        .when('/dashboard', {
            resolve: {
                "check": function ($location, $rootScope) {
                    if (!$rootScope.loggedIn) {
                        $location.path('/');
                    }
                }
            },
            templateUrl: 'dashboard.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});
app.controller('loginCtrl', function ($scope, $location, $rootScope) {
    $scope.submit = function () {

        if ($scope.username == 'admin' && $scope.password == '123') {
            $rootScope.loggedIn = true;
            $location.path('/dashboard');
            //window.location.hash = '#/dashboard';
        } else {
            // $location.path('/error');
            alert('Wrong Stuff');
        }
    };
});
