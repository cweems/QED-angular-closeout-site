'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('content/items.json').success(function(data) {
    $scope.items = data;
  });

   $('.portfolioFilter a').click(function(){
      $('.portfolioFilter .current').removeClass('current');
      $(this).addClass('current');
    });
}

//PhoneListCtrl.$inject = ['$scope', '$http'];