var app = angular.module('promesaApp.servicios', []);
app.config(function ($sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist(['http://www.json-generator.com/api/json/get/cgCoweSlRu?indent=2']);
   });
app.factory('Personas', ['$http','$q', function($http, $q){

    const url = 'http://www.json-generator.com/api/json/get/cgCoweSlRu?indent=2' 
    var self ={
		"cargando": false,
		"data":[]
	};
   
    self.cargarData = function(){
        self.cargando = true;

        var q = $q.defer();

        $http.jsonp('http://www.json-generator.com/api/json/get/cgCoweSlRu?indent=2' , {jsonpCallbackParam: 'callback'})
            .then(function success( data ){
                console.log('Todo bien');
                console.log(data);
            }, 
            function error(response){
                console.log(':(');
            });
    };
    self.cargarData();

    return self;
}]);