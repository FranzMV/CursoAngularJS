var app = angular.module( 'facturacionApp',[ 
		'ngRoute',
		'facturacionApp.configuracion',
		'facturacionApp.mensajes',
		'facturacionApp.notificaciones',
		'facturacionApp.clientes',
		'facturacionApp.clientesCtrl',
		'facturacionApp.dashboardCtrl',
		'facturacionApp.clientesCtrl'
		]);


app.controller(
				'mainCtrl',
				 [
					'$scope', 
					'Configuracion',
					'Mensajes', 
					'Notificaciones', 
					function($scope, Configuracion,Mensajes, Notificaciones){
	
	$scope.config = {};
	$scope.mensajes = Mensajes.mensajes;
	$scope.notificaciones = Notificaciones.notificaciones;
	//console.log( $scope.notificaciones );
	$scope.usuario = { nombre: "Fran Valle" };
	$scope.titulo 	 = '';
	$scope.subtitulo = '';

	Configuracion.cargar().then( function(){
		$scope.config = Configuracion.config;
		//console.log($scope.config);
	});

	// ================================================
	//   Funciones globales del Scope
	// ================================================

	$scope.activar = function(menu, submenu, titulo, subtitulo){

		$scope.titulo 	 = titulo;
		$scope.subtitulo = subtitulo;

		$scope.mDashboard = "";
		$scope.mClientes  = "";

		$scope[menu] = 'active';
	}


}]);


// ================================================
//   Rutas
// ================================================
app.config([ '$routeProvider', function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'dashboard/dashboard.html',
			controller: 'dashboardCtrl'
		})
		.when('/clientes',{
			templateUrl: 'clientes/clientes.html',
			controller: 'clientesCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})

}]);


// ================================================
//   Filtros
// ================================================
app.filter( 'quitarletra', ()=>{
	return function(palabra){
		if( palabra ){
			if( palabra.length > 1)
				return palabra.substr(1);
			else
				return palabra;
		}
	}
})

.filter( 'mensajecorto', ()=>{
	return function(mensaje){
		if( mensaje ){
			if( mensaje.length > 35)
				return mensaje.substr(0,35) + "...";
			else
				return mensaje;
		}
	}
})








