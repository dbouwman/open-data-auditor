'use strict';

var auditorApp = angular.module('auditorApp', ['ngResource','ngSanitize','ngCookies','ui.router']);


auditorApp
.config(function ($stateProvider, $urlRouterProvider) {
   // You can only inject Providers (not instances)


  $urlRouterProvider.otherwise('/home');

  $stateProvider


    //Home State and nested templates

    .state('home',{
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    })

    .state('results',{
      url: '/search?q',
      templateUrl: 'templates/results.html',
      controller: 'ResultsController'
    })

    .state('dataset',{
      url: '/dataset/:id',
      templateUrl: 'templates/dataset.html',
      controller: 'DatasetController'
    })


    ;// close things off

});
// .
// run(function(identityService){
//    // You can only inject instances (not Providers)
   
//    //ask the identityService to check the cookie
//    identityService.checkCookie();
   
// });
