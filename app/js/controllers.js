'use strict';

/* Controllers */



function PhoneListCtrl($scope, $http) {
  $http.get('content/items.json').success(function(data) {
    $scope.items = data;
  });

  $http.get('content/modals.json').success(function(modalData) {
    $scope.modals = modalData;
  });

  $('.portfolioFilter li a').click(function(){
		$('.portfolioFilter .current').removeClass('current');
		$(this).addClass('current');
  }); 

  $(document).ready(function() {
    $(window).scroll(function() {
        if ($('body').height() <= ($(window).height() + $(window).scrollTop())) {
          $('.next-button').show("slow");
        }
        if ($('body').height() > ($(window).height() + 200 + $(window).scrollTop())) {
          $('.next-button').hide("slow");
        }
      });
    });  
}

//PhoneListCtrl.$inject = ['$scope', '$http'];