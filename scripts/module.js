var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "./views/login.html",
        controller : "loginCtrl"
    })
    .when("/home",{
        templateUrl : "./views/home.html",
        controller : "homeCtrl"
    })
    .otherwise({
        redirecTo : "/"
    });
});

app.controller('homeCtrl',function($scope){
    $scope.homeMessage = "In home message";
    $(document).ready(function() {
        $('#example').DataTable({
            sort: false
        });
        $('#example_filter input').attr('placeholder','Filter by Name or ID')
    } );
});
app.controller('ctrl',function($scope){
    $scope.message = "index message";
});
app.controller('loginCtrl',function($scope,$http,$location){
    var userList = [{name:"abhijit",password:"abhijit"}];
    $scope.login = function(){
        if($scope.userName && $scope.passWord){
            angular.forEach(userList,function(val){
                if($scope.userName == val.name && $scope.passWord == val.password){

                }
                $("#login").removeClass("beforeLog");
                $("#login").addClass('afterLog');
                $("#login").remove();
                $location.path("/home");
            })

        }
    }
});