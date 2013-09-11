'use strict';

/* Controllers */

function PhoneListCtrl($scope, $http) {
  $http.get('content/items.json').success(function(data) {
    $scope.items = data;
  });

  $http.get('content/modals.json').success(function(modalData) {
    $scope.modals = modalData;
  });


   $('.portfolioFilter a').click(function(){
		$('.portfolioFilter .current').removeClass('current');
		$(this).addClass('current');
    });
   $('.input-group .showSearch').click(function(){
		$('.portfolioFilter .current').removeClass('current');
		$('.portfolioFilter #first-link').addClass('current');
   });
}

//PhoneListCtrl.$inject = ['$scope', '$http'];