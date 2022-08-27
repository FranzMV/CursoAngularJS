var app = angular.module('promesaApp.controladores', []);

app.controller('mainCtrl', ['$scope','$q', function($scope, $q){
    
    $scope.myVar = 0;
   
    // setInterval(function(){
    //     $scope.myVar++;
    //     $scope.$apply();
    //     console.log('Sumando...');
    // }, 1000);

    //$q permite ejecutar funciones de forma asíncrona
    $scope.sumar = function(num){
        var q = $q.defer();//
        var valido = true;
        num ++;

        setInterval(function(){
            valido === true ? q.resolve( num ) : q.reject('No se sumar');
        },2000);
        return q.promise;
    }

    $scope.promise = $scope.sumar( 1 );
    $scope.promise.then( 
        function( valor ){
            console.log( 'Promesa cumplida');
            $scope.myVar = valor;
        },function( error ){
            console.error( error );
            $scope.myVar = 'Error !!';
    });

}]);