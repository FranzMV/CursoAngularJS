//Se encarga de redirigir las diferentes rutas de las paginas
app.config(function($routeProvider){

    $routeProvider
        .when('/',{
            templateUrl: 'parciales/home.html',
            controller: 'inicioCrtl'
        })
        .when('/profesores',{
            templateUrl: 'parciales/profesores.html',
            controller: 'profesoresCrtl'
        })
        .when('/alumnos',{
            templateUrl: 'parciales/alumnos.html',
            controller: 'alumnosCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
});