'use strict';

angular.module('auditorApp')
  .controller('SearchController', 
    function ($scope, $location, $log) {

      /**
       * Simply change the route and pass the parameter and 
       * let the results controller handle things
       */
      $scope.search = function(query){
        console.log('got search! q:' + query);
        //redirect to search
        $location.path('/search').search({q: query});
      };


    }
  );
