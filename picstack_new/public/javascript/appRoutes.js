angular.module('app').config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
        templateUrl: 'views/home.html',
		controller: 'HomeController'
    })
	.when('/mine/:userid', {
		controller: 'MineController',
		templateUrl: 'views/mine.html'
	})
    .when('/deets/:id', {
        controller: 'DeetsController',
        templateUrl: 'views/deets.html'
    })
	.when('/settings', {
		controller: 'SettingsController',
		templateUrl: 'views/settings.html'
	})

	.otherwise({
		redirectTo: '/'
	});
    
}]);
                                       
                                    