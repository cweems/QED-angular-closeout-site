'use strict';

/* Controllers */



function mainCtrl($scope, $http) {
  $http.get('content/items.json').success(function(data) {
    $scope.items = data; //Loads content items
    $scope.Filter = {type : 'Introduction'}; //Sets filter for first section
    $scope.nextButton = {text: 'Next Up: Letter from the Team', href: '#Welcome', filter: 'Welcome', identification: 'first-link'}; //Sets value for 'next' button
  });

  $http.get('content/modals.json').success(function(modalData) {
    $scope.modals = modalData; //Gets modal content
  });

  $('ul.nav li').click(function(){ //Changes class of clicked link to 'active'; white bar next to nav moves
		$('ul.nav li.active').removeClass('active');
		$(this).addClass('active');
  });

  $('#stacey-video').on('hidden.bs.modal', function () {
      console.log("success!");
  });

  $( "#stacey-video .close" ).click(function() {
    alert( "Handler for .click() called." );
  });


  $('.next-button').click(function(){ //Changes class of nav when next button is clicked
    var activeLink = $('ul.nav li.active').removeClass('active');
    activeLink.next().addClass('active');
  })

  $('ul.nav li').click(function(event){
    var navId = event.target.id;
    switch(navId){
    case 'summary':
      $scope.Filter = {type : 'Introduction'};
      $scope.nextButton = {text: 'Next Up: Letter from the Team', href: '#Welcome', filter: 'Welcome', identification: 'first-link'};
      $('body').scrollTo( $('#Introduction'), 800 );
      break;
    case 'first-link':
      $scope.Filter = {type : 'Welcome'};
      $scope.nextButton = {text: 'Next Up: Evolution of KDMD', href: '#Evolution', filter: 'Evolution', identification: 'second-link'};
      $('body').scrollTo( $('#Welcome'), 800 );
      break;
    case 'second-link':
      $scope.Filter = {type : 'Evolution'};
      $scope.nextButton = {text: 'Next Up: Our KM Approach', href: '#Approach', filter: 'Approach', identification: 'third-link'};
      $('body').scrollTo( $('#Evolution'), 800 );
      break;
    case 'third-link':
      $scope.Filter = {type : 'Approach'};
      $scope.nextButton = {text: 'Next Up: Our USAID Partners', href: '#Partners', filter: 'Partners', identification: 'fourth-link'};
      $('body').scrollTo( $('#Approach'), 800 );
      break;
    case 'fourth-link':
      $scope.Filter = {type : 'Partners'};
      $scope.nextButton = {text: 'Next Up: Building Communities', href: '#Communities', filter: 'Communities', identification: 'fifth-link'};
      $('body').scrollTo( $('#Partners'), 800 );
      break;
    case 'fifth-link':
      $scope.Filter = {type : 'Communities'};
      $scope.nextButton = {text: 'Next Up: Our Knowledge Management Reach', href: '#Reach', filter: 'Reach', identification: 'sixth-link'};
      $('body').scrollTo( $('#Communities'), 800 );
      break;
    case 'sixth-link':
      $scope.Filter = {type : 'Reach'};
      $scope.nextButton = {text: 'Next Up: Our Impact', href: '#Impact', filter: 'Impact', identification: 'seventh-link'};
      ('body').scrollTo( $('#Reach'), 800 );
      break;
    case 'seventh-link':
      $scope.Filter = {type : 'Impact'};
      $scope.nextButton = {text: 'Next Up: Our Story, Our Team', href: '#Team', filter: 'Team', identification: 'eighth-link'};
      ('body').scrollTo( $('#Impact'), 800 );
      break;
    case 'eighth-link':
      $scope.Filter = {type : 'Team'};
      $scope.nextButton = {text: 'Next Up: Contact', href: '#Contact', filter: 'Contact', identification: 'ninth-link'};
      ('body').scrollTo( $('#Team'), 800 );
      break;
    case 'ninth-link':
      $scope.Filter = {type : 'Contact'};
      $scope.nextButton = {text: 'Back to Introduction', href: '#Introduction', filter: 'Introduction', identification: 'tenth-link'};
      ('body').scrollTo( $('#Contact'), 800 );
      break;
    default:
      $scope.Filter = {type : 'Welcome'};
    };
  });

  $('.next-button').click(function(event){
    var nextButtonId = event.target.id;
    switch(nextButtonId){
    case 'first-link':
      console.log("first success!");
      $scope.Filter = {type : 'Welcome'};
      $scope.nextButton = {text: 'Next Up: Evolution of KDMD', href: '#Evolution', filter: 'Evolution', identification: 'second-link'};
      $('body').scrollTo( $('#Welcome'), 800 );
      break;
    case 'second-link':
      console.log("second success!");
      $scope.Filter = {type : 'Evolution'};
      $scope.nextButton = {text: 'Next Up: Our USAID Partners', href: '#Approach', filter: 'Approach', identification: 'third-link'};
      $('body').scrollTo( $('#Evolution'), 800 );
      break;
    case 'third-link':
      $scope.Filter = {type : 'Approach'};
      $scope.nextButton = {text: 'Next Up: Building Communities', href: '#Partners', filter: 'Partners', identification: 'fourth-link'};
      $('body').scrollTo( $('#Approach'), 800 );
      break;
    case 'fourth-link':
      $scope.Filter = {type : 'Partners'};
      $scope.nextButton = {text: 'Next Up: Our Knowledge Management Reach', href: '#Communities', filter: 'Communities', identification: 'fifth-link'};
      $('body').scrollTo( $('#Partners'), 800 );
      break;
    case 'fifth-link':
      $scope.Filter = {type : 'Communities'};
      $scope.nextButton = {text: 'Next Up: Our Impact', href: '#Reach', filter: 'Reach', identification: 'sixth-link'};
      $('body').scrollTo( $('#Communities'), 800 );
      break;
    case 'sixth-link':
      $scope.Filter = {type : 'Reach'};
      $scope.nextButton = {text: 'Next Up: Our Team, Our Story', href: '#Impact', filter: 'Impact', identification: 'seventh-link'};
      ('body').scrollTo( $('#Reach'), 800 );
      break;
    case 'seventh-link':
      $scope.Filter = {type : 'Impact'};
      $scope.nextButton = {text: 'Next Up: Contact', href: '#Team', filter: 'Team', identification: 'eighth-link'};
      ('body').scrollTo( $('#Impact'), 800 );
      break;
    case 'eighth-link':
      $scope.Filter = {type : 'Team'};
      $scope.nextButton = {text: 'Back to Introduction', href: '#Introduction', filter: 'Contact', identification: 'ninth-link'};
      ('body').scrollTo( $('#Introduction'), 800 );
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
        if ($('body').height() <= ($(window).height() + 100 + $(window).scrollTop())) {
          $('.next-button').show("slow");
        }
        if ($('body').height() > ($(window).height() + 100 + $(window).scrollTop())) {
          $('.next-button').hide("slow");
        }
      });
  });
}

//PhoneListCtrl.$inject = ['$scope', '$http'];