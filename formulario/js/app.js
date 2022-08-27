
var app = angular.module('bonusApp',[ ]);

app.controller('mainCtrl', ['$scope', function($scope){

    //Una forma de controlar las validaciones de un formulario es creando un objeto
    $scope.formData = {};
    $scope.mensaje ="";

    $scope.guardar_datos = function(valido){
        valido === false ?  
            $scope.mensaje ='El formulario contiene errores.....' :  
            $scope.mensaje='Posteando.....';
    }
	
}]);
