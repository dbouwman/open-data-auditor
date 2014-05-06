//http://www.arcgis.com/sharing/rest/content/items/73c8d5382281428ca810f67a81896e2d

'use strict';

angular.module('auditorApp')
  .factory('itemService', function($http, $q, $log){
    return {
    
      /**
       * Fetch a Layer Json
       */
      getItemJson: function(itemId){
        var deferred = $q.defer();
        //check if it's in the cache, and resolve with that
        //or issue the xhr
        $http({
          method:'GET',
          url: 'http://www.arcgis.com/sharing/rest/content/items/' + itemId + '?f=json'
        })
        .success(function(data,status,headers,config){
          $log.info(data,status, headers());
          deferred.resolve(data);

        })
        .error(function(data,status,headers,config){

          $log.error(data,status, headers());
          deferred.reject(status);

        });
        return deferred.promise;
      }

    };

});

