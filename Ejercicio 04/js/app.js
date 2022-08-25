(function(){

var app = angular.module('ejemplosApp',[ ]);



app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
  $scope.profesores = {};

  //Cargar los datos json de forma dinanmica mediante Ajax
  $http.get('json/profesores.json').success(function(data){
        //Codigo cuando la peticion es correcta
        $scope.profesores = data;
  });


  



}]);





})();
