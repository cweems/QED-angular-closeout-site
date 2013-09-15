'use strict';

/* Controllers */



function PhoneListCtrl($scope, $http) {
  $http.get('content/items.json').success(function(data) {
    $scope.items = data;
    $scope.Filter = {type : 'Welcome'}; 
  });

  $http.get('content/modals.json').success(function(modalData) {
    $scope.modals = modalData;
  });

  $('ul.nav li').click(function(){
		$('ul.nav li.current').removeClass('current');
		$(this).addClass('current');
  });

  $('ul.nav #first-link').click(function(){
    $scope.Filter = {type : 'Welcome'};
  });

  $('ul.nav #second-link').click(function(){
    $scope.Filter = {type : 'Evolution'};
  });

  $('ul.nav #third-link').click(function(){
    $scope.Filter = {type : 'Approach'};
  });

  $('ul.nav #fourth-link').click(function(){
    $scope.Filter = {type : 'Partners'};
  });

  $('ul.nav #fifth-link').click(function(){
    $scope.Filter = {type : 'Communities'};
  });

  $('ul.nav #sixth-link').click(function(){
    $scope.Filter = {type : 'Reach'};
  });

  $('ul.nav #seventh-link').click(function(){
    $scope.Filter = {type : 'Impact'};
  });

  $('ul.nav #eighth-link').click(function(){
    $scope.Filter = {type : 'Team'};
  });

  $('ul.nav #ninth-link').click(function(){
    $scope.Filter = {type : 'Contact'};
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