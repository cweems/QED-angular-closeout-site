'use strict';

/* Controllers */



function PhoneListCtrl($scope, $http) {
  $http.get('content/items.json').success(function(data) {
    $scope.items = data;
    $scope.Filter = {type : 'Welcome'};
    $scope.nextButton = {text: 'Next Up: Evolution of KDMD', href: '#Evolution', filter: 'Evolution'};
  });

  $http.get('content/modals.json').success(function(modalData) {
    $scope.modals = modalData;
  });

  $('ul.nav li').click(function(){
		$('ul.nav li.current').removeClass('current');
		$(this).addClass('current');
  });

  $('.next-button').click(function(){
    var activeLink = $('ul.nav li.current').removeClass('current');
      activeLink.next().addClass('current');
  })


  $('ul.nav li').click(function(event){
    var navId = event.target.id;
    switch(navId){
    case 'first-link':
      $scope.Filter = {type : 'Welcome'};
      $scope.nextButton = {text: 'Next Up: Evolution of KDMD', href: '#Evolution', filter: 'Evolution', newValue: 'first-link'};
      $('body').scrollTo( $('#Welcome'), 800 );
      break;
    case 'second-link':
      $scope.Filter = {type : 'Evolution'};
      $scope.nextButton = {text: 'Next Up: Our KM Approach', href: '#Approach', filter: 'Approach', newValue: 'first-link'};
      $('body').scrollTo( $('#Evolution'), 800 );
      break;
    case 'third-link':
      $scope.Filter = {type : 'Approach'};
      $scope.nextButton = {text: 'Next Up: Our US newValue Partners', href: '#Partners', filter: 'Partners', newValue: 'first-link'};
      $('body').scrollTo( $('#Approach'), 800 );
      break;
    case 'fourth-link':
      $scope.Filter = {type : 'Partners'};
      $scope.nextButton = {text: 'Next Up: Building Communities', href: '#Communities', filter: 'Communities', newValue: 'first-link'};
      $('body').scrollTo( $('#Partners'), 800 );
      break;
    case 'fifth-link':
      $scope.Filter = {type : 'Communities'};
      $scope.nextButton = {text: 'Next Up: Our Knowledge Management Reach', href: '#Reach', filter: 'Reach', newValue: 'first-link'};
      $('body').scrollTo( $('#Communities'), 800 );
      break;
    case 'sixth-link':
      $scope.Filter = {type : 'Reach'};
      $scope.nextButton = {text: 'Next Up: Our Impact', href: '#Impact', filter: 'Impact', newValue: 'first-link'};
      ('body').scrollTo( $('#Reach'), 800 );
      break;
    case 'seventh-link':
      $scope.Filter = {type : 'Impact'};
      $scope.nextButton = {text: 'Next Up: Our Story, Our Team', href: '#Team', filter: 'Team', newValue: 'first-link'};
      ('body').scrollTo( $('#Impact'), 800 );
      break;
    case 'eighth-link':
      $scope.Filter = {type : 'Team'};
      $scope.nextButton = {text: 'Next Up: Contact', href: '#Contact', filter: 'Contact', newValue: 'first-link'};
      ('body').scrollTo( $('#Team'), 800 );
      break;
    case 'ninth-link':
      $scope.Filter = {type : 'Contact'};
      ('body').scrollTo( $('#Contact'), 800 );
      break;
    default:
      $scope.Filter = {type : 'Welcome'};
    };
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