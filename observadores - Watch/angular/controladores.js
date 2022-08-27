var app = angular.module('paginacionApp.controladores',[]);

app.controller('observadorCtrl', ['$scope', function ($scope) {
	
	$scope.nombre ="Francisco David";

    //Funcion que se ejecutara cuando la variable cambie
    //Recibe dos parametros: nuevo valor, valor anterior
    $scope.$watch('nombre', function(newValue, oldValue){
        console.log('New Value: '+newValue+' Old Value: '+ oldValue);
    });
}]);