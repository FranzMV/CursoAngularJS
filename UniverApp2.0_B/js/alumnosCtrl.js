app.controller('alumnosCtrl', ['$scope','$http', function($scope,$http){

    $scope.setActive("mAlumnos");
    $scope.alumnos = {};
    $scope.posicion = 5;
    // $http.get('php/servicios/alumnos.listado.php').then(function(response){
    //     $scope.alumnos = response.data;
    // });
    $http({
        method: 'GET',
        url: 'php/servicios/alumnos.listado.php'
     }).then(function (response){
        $scope.alumnos = response.data;
     },function (error ='Ha ocurrido un error al obtener los datos de la base de datos.'){
        console.log(error);
     });

    $scope.siguientes = function(){
        if($scope.alumnos.length > $scope.posicion){
            $scope.posicion += 5;
        }
    }

    $scope.anteriores = function(){
        if($scope.posicion > 5){
            $scope.posicion -= 5;
        }
    }

}]);