var app = angular.module('universidadApp',[]);

app.controller('profesorCtrl',function($scope){
    //Hacemos referencia al objeto para crear la propiedad del controlador referente al profesor
    $scope.profesor = profesorData;
    $scope.editando = {};
    $scope.mostrarCaja = false;

    $scope.EditarProfesor = function(){
        angular.copy( $scope.profesor, $scope.editando);
        $scope.mostrarCaja = true;
    }

    $scope.GuardarCambios = function(){
        angular.copy( $scope.editando, $scope.profesor );
        $scope.mostrarCaja = false;
    }

    $scope.CancelarCambios = function(){
        $scope.editando = {};
        $scope.mostrarCaja = false;
    }
});

var profesorData = {
    nombre: "Juan Carlos Pineda",
    bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
    edad: 47,
    foto: "img/juancarlos.jpg"
}