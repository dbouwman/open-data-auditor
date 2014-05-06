'use strict';


angular.module('auditorApp')
  .controller('DatasetController', 

    function ($scope, $stateParams, $log, searchService, featureLayerService, itemService) {
      $log.info('Got dataset id: ' + $stateParams.id);
      //call the serice, which will return a deferred

      //first step to making this a param used more widely
      var openDataBaseUrl = 'http://openepa.dcdev.opendata.arcgis.com';
      
      searchService.getDataset( openDataBaseUrl ,$stateParams.id ).then(
          function(jsonData){
            $scope.dataset = jsonData.data;
            featureLayerService.getFeatureLayerJson(jsonData.data.url).then(
              function(json){
                $scope.layer = json;
              },
              function(status){
                $scope.layerError = status;
              }
            );
            itemService.getItemJson(jsonData.data.item_id).then(
              function(json){
                $scope.item = json;
              },
              function(status){
                $scope.itemError = status;
              }
            );

          },
          function(status){
            $scope.datasetError = status;
          }
      );

  
     
      // getDataset = function(openDataBaseUrl ,$stateParams.id){

      // };

      // getFeatureLayer = function(featureLayerUrl){

      // };

      // getAgolItem = function(itemUrl){

      // };

  });