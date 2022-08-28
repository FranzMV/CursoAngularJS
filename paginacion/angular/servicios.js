var app = angular.module('paginacionApp.servicios',[]);

app.factory('Paises', ['$http', function($http){
	
	let self = {
		cargando: false,
		pagina: 1,
		total: 0,
		totalpaginas: 0,
		data:[],

		
		cargarData:function( opciones ){
			self.cargando = true;
			self.pagina = opciones.pagina;
			$http.post('php/servicios/paises.getPaises.php',opciones)
				.success(function success(respuesta) {
					if(respuesta === 'undefined'){
						console.log('NOT DEFINED: ');
					}
					self.cargando = false;
					self.totalpaginas = respuesta.totalpaginas;
					self.total = respuesta.total;
					self.data = respuesta.data;
					console.log('Success: '+ JSON.stringify(self ));

			}, function error(respuesta) {
				console.error("Malas noticias");
	
			});
			/*
			$http({
				method: "POST",
				url: "php/servicios/paises.getPaises.php",
				//data: opciones
	
			}).then(function success(respuesta) {
					if(respuesta === 'undefined'){
						console.log('NOT DEFINED: ');
					}
					self.cargando = false;
					self.totalpaginas = respuesta.totalpaginas;
					self.total = respuesta.total;
					self.data = respuesta.data;
					console.log('Success: '+ JSON.stringify(self ));

			}, function error(respuesta) {
				console.error("Malas noticias");
	
			});*/
		}
	}

	var defecto = {
		pagina:1
	};

	self.cargarData( defecto );
	return self;

}]);