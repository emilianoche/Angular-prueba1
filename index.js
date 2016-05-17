var app = angular.module('miApp', ['ngRoute']);

app.config(function($routeProvider){
  $routeProvider
  .when('/',{ 
     templateUrl:'main.html',
     controller: 'mainController'
  })
  .when('/agregar',{
    templateUrl: 'addCity.html',
    controller: 'addController'
  });
});
app.factory('cityFactory',function(){ 
   var cities = [
    {name:'Bariloche', country:'Argentina'}, 
    {name:'Puerto Madryn', country:'Argentina'}, 
    {name:'Paris', country:'Francia'}, 
    {name:'Londres', country:'Reino Unido'}];

  return {
    getAll : function () {return cities;},
    add : function (city) {cities.push(city)}
  };
});                           

app.controller('mainController', function ($scope, cityFactory) {
         $scope.cities = cityFactory.getAll();
      } );

app.controller('addController', function($scope, cityFactory)
{

         $scope.agregar = function(){
  // Tomar el valor de los inputs
    var newCity = {
      name: $scope.newCity,
      country: $scope.newCountry
    };

    // Agregarlos al servicio
    cityFactory.add(newCity);
    
    // Limpiar los inputs
    $scope.newCity= '';
    $scope.newCountry = '';
        };
      });
