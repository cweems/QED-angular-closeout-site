'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('content/items.json').success(function(data) {
    $scope.phones = data;
  });

  $scope.orderProp = 'age';
}

//PhoneListCtrl.$inject = ['$scope', '$http'];