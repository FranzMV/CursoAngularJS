app.controller('alumnoCtrl', ['$scope', '$routeParams','$http', function($scope, $routeParams, $http){

    //Cogemos el codigo de la ruta
    var codigo = $routeParams.codigo;
    $scope.alumno = {};
    $scope.actualizado = false;
    $scope.creando = false;


    if(codigo === 'nuevo'){
      $scope.creando = true;
    }else{
      $http({
         method: 'GET',
         url: 'php/servicios/alumnos.getAlumno.php?c='+codigo
      }).then(function (response){
         // if(response.err === false){
         //     window.location = "#!/alumnos";
         //     return;
         // }
         $scope.alumno = response.data;
      });
    }
    
    $scope.guardarAlumno = function(){

      if($scope.creando){
         $http.post('php/servicios/alumnos.crear.php', $scope.alumno).then(function(data){
            if(data.err === false){
               $scope.actualizado = true;
               setTimeout(function(){
                  $scope.actualizado = false;
                  $scope.$apply;
               },3500);
            }
         });

      }else{
         $http.post('php/servicios/alumnos.guardar.php', $scope.alumno).then(function(data){
            if(data.err === false){
               $scope.actualizado = true;
               setTimeout(function(){
                  $scope.actualizado = false;
                  $scope.$apply;
               },3500);
            }
         });
      }
    }

}]);