'use strict';

angular.module('auditorApp')
  .factory('featureLayerService', function($http, $q, $log){
    return {
    
      /**
       * Fetch a Layer Json
       */
      getFeatureLayerJson: function(layerUrl){
        var deferred = $q.defer();
        //check if it's in the cache, and resolve with that
        //or issue the xhr
        $http({
          method:'GET',
          url: layerUrl + '?f=json'
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

