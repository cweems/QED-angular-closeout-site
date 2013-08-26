'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('content/items.json').success(function(data) {
    $scope.items = data;
  });

  $scope.orderProp = 'order';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];