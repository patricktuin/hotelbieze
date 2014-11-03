var app = angular.module('wedding', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.
    	when('/', {
			templateUrl: "templates/home.html",
			
		}).
		when('/programma', {
			templateUrl: "templates/programma.html",
			// controller: "AppCtrl"
		}).
		when('/dresscode', {
			templateUrl: "templates/info/dresscode.html",
			// controller: "AppCtrl"
		}).
		when('/fotos', {
			templateUrl: "templates/info/fotos.html",
			// controller: "AppCtrl"
		}).
		when('/vakantie', {
			templateUrl: "templates/info/vakantie.html",
			// controller: "AppCtrl"
		}).
		when('/speech', {
			templateUrl: "templates/info/speeches.html",
			// controller: "AppCtrl"
		}).
		when('/kadotip', {
			templateUrl: "templates/info/kadotip.html",
			// controller: "AppCtrl"
		}).
		when('/music', {
			templateUrl: "templates/info/music.html",
			// controller: "AppCtrl"
		}).
		when('/locatie', {
			templateUrl: "templates/locatie.html",
			// controller: "AppCtrl"
		}).
		when('/ceremoniemeesters', {
			templateUrl: "templates/ceremoniemeesters.html",
			// controller: "AppCtrl"
		}).
		when('/gasten', {
			templateUrl: "templates/gasten.html",
			// controller: "AppCtrl"
		}).
		when('/info', {
			templateUrl: "templates/info.html",
			// controller: "AppCtrl"
		}).
		when('/programma', {
			templateUrl: "templates/info/programma.html",
			// controller: "AppCtrl"
		}).
    	when('/overnachten', {
 			templateUrl: 'templates/overnachten.html',
        	// controller: 'AddOrderController'
    	});
});

	
app.controller("collapseController", function($rootScope){
	$rootScope.$on('$routeChangeSuccess', function() {
        var toggle = angular.element('.navbar-toggle');
        if (!toggle.hasClass('collapsed')) {
            angular.element('.navbar-collapse').removeClass('in').addClass('collapsed');

        }
	});
});


app.controller("guestController", function($scope, $http) {
	$scope.formData = {};

	$http.get('http://127.0.0.1:8080/api/wedding')
		.success(function(data) {
			$scope.guests = data;
			console.log(data);
			$scope.checked = "checked";
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	$scope.changeAttend = function(id) {
		$http.get('http://127.0.0.1:8080/api/wedding/' + id)
		.success(function(data) {
			$scope.guest = data;
			console.log(data);
			$scope.checked = "checked";
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	}	
	
	$scope.addGuest = function() {
	$http.post('/api/wedding', $scope.formData)
		.success(function(data) {
			$scope.formData = {}; // clear the form so our user is ready to enter another
			$scope.sausages = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});
	};

	// delete a coffee 
	$scope.deleteGuest = function(id) {
		$http.delete('/api/wedding/' + id)
			.success(function(data) {
				$scope.guest = data;
				console.log(data);
			})

			.error(function(data) {
				console.log('Error: ' + data);
			});
	};


}); 




app.controller("TabController", function() {
	this.tab = 'home';

	this.setTab = function(setTab) {
		this.tab = setTab;
	};

	this.isSet = function(checkTab) {
		return this.tab === checkTab;
	};
});


app.controller("Timer", function() {
	this.tab = 'home';

	this.setTab = function(setTab) {
		this.tab = setTab;
	};

	this.isSet = function(checkTab) {
		return this.tab === checkTab;
	};
});



app.controller("ThumbController", function() {
	this.thumb = 0;

	this.setThumb = function(setThumb) {
		this.thumb = setThumb;
	};

	this.isSet = function(checkThumb) {
		return this.thumb === checkThumb;
	};


});
