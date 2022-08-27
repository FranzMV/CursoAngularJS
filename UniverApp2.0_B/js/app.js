var app = angular.module('universidadApp',['ngRoute','ui.mask']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
    $scope.menuSuperior = 'parciales/menu.html';

    $scope.setActive = function(opcion){
        $scope.mInicio = "";
        $scope.mProfesores = "";
        $scope.mAlumnos = "";

        $scope[opcion] = 'nav-item active';
    }
    
}]);

//Filtro personalizado de telefono
app.filter('telefono',function(){
    return function(numero){
        return numero.substring(0,4) +"-"+numero.substring(4);
    }
});